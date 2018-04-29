import React, { Component } from "react";
import "./App.css";
import * as firebase from "firebase";
import RoomList from "./components/RoomList";

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
      <div className="App">
        <RoomList />
      </div>
    );
  }
}

export default App;
