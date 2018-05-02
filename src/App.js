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
  render() {
    return (
      <div className="container-fluid">
        <div className="row content">
          <div className="col-sm-4 sidenav">
            <div className="App">
              <h1>Bloc Chat</h1>
              <RoomList firebase={firebase} />
              <MessageList firebase={firebase} />
            </div>
          </div>
          <div className="col-sm-8">
            <div className="fa-10x">
              <i className="far fa-square fa-spin" />
              <i className="fas fa-square fa-spin" />
              <i className="far fa-square fa-spin" />
              <i className="fas fa-square fa-spin" />
              <i className="far fa-square fa-spin" />
              <i className="fas fa-square fa-spin" />
              <i className="far fa-square fa-spin" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
