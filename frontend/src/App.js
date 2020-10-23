import React, { useState, useEffect } from 'react';
import './App.css';
import { connect, sendMsg } from "./api";
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import LoginControl from './components/LoginControl';
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
    const[chatHistory, setChatHistory] = useState([]);
    const { user, isAuthenticated, isLoading } = useAuth0();

    const send = (event) => {
        if(event.keyCode === 13 && isAuthenticated) {
            sendMsg(user.name + ": " + event.target.value);
            event.target.value = "";
        }
    }

    useEffect(() => {
        connect((msg) => {
            console.log("New Message")
            setChatHistory([...chatHistory, msg])
        });
    });

    return (
          <div className="App">
              <Header />
              <LoginControl />
              <ChatHistory chatHistory={chatHistory} />
              <ChatInput send={send} />
          </div>
    );
}


export default App;
