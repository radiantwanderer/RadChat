import React, { Component } from 'react';
import './App.css';
import { connect, sendMsg } from "./api";
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          chatHistory: []
      }
  }

  send(event) {
      if(event.keyCode === 13) {
          sendMsg(event.target.value);
          event.target.value = "";
      }
  }

  render() {
      return (
            <div className="App">
                <Header />
                <LoginButton />
                <Profile />
                <ChatHistory chatHistory={this.state.chatHistory} />
                <ChatInput send={this.send} />
            </div>
      );
  }

  componentDidMount() {
      connect((msg) => {
          console.log("New Message")
          this.setState(prevState => ({
              chatHistory: [...this.state.chatHistory, msg]
          }))
          console.log(this.state);
      });
  }
}

export default App;
