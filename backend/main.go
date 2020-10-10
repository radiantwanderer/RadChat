package main

import (
    //"encoding/json"
    "fmt"
    "github.com/gorilla/mux"
    "net/http"

    "github.com/radiantwanderer/RadChat/pkg/websocket"
)

func serveWs(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
    fmt.Println("WebSocket Endpoint Hit")
    //upgrade this connection to websocket connection

    conn, err := websocket.Upgrade(w, r)
    if err != nil {
        fmt.Fprintf(w, "%+V\n", err)
    }

    client := &websocket.Client{
        Conn: conn,
        Pool: pool,
    }

    pool.Register <- client
    client.Read()
}

func setupRoutes() {
    pool := websocket.NewPool()
    go pool.Start()

    http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
        serveWs(pool, w, r)
    })
}

func main() {
    fmt.Println("RadChat v0.02")
    setupRoutes()

    r := mux.NewRouter()

    r.Handle("/", http.FileServer(http.Dir("./views/")))

    r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./static/"))))

    http.ListenAndServe(":8080", nil)
}
