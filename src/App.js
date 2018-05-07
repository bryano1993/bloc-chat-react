import React, { Component } from "react";
import "./App.css";
import * as firebase from "firebase";
import RoomList from "./components/RoomList";
import MessageList from "./components/MessageList";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDOKgqf3jL63vFoXzj4XSgdptFHMeImA98",
  authDomain: "bloc-chat-react-2a8c3.firebaseapp.com",
  databaseURL: "https://bloc-chat-react-2a8c3.firebaseio.com",
  projectId: "bloc-chat-react-2a8c3",
  storageBucket: "bloc-chat-react-2a8c3.appspot.com",
  messagingSenderId: "412457962211"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: ""
    };
  }

  currentRoom = room => {
    this.setState({ activeRoom: room });
  };

  render() {
    const revealMessage = this.state.activeRoom;
    return (
      <div className="container-fluid">
        <div className="row content">
          <div className="col-sm-4 sidenav">
            <div className="App">
              <h1>Bloc Chat</h1>
              <h3>{this.state.activeRoom.name || "Pick a room"}</h3>
              <RoomList firebase={firebase} currentRoom={this.currentRoom} />
            </div>
          </div>
          <div className="col-sm-8">
            <h3>Messages</h3>
            {revealMessage ? (
              <MessageList
                firebase={firebase}
                activeRoom={this.state.activeRoom}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
