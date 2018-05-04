import React, { Component } from "react";

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
    this.messagesRef = this.props.firebase.database().ref("messages");
  }

  componentDidMount() {
    this.messagesRef.on("child_added", snapshot => {
      let message = snapshot.val();
      console.log(message);
      this.setState({ messages: this.state.messages.concat(message) });
    });
  }

  render() {
    return (
      <div>
        {this.state.messages.map((message, key) => (
          <div key={key}>
            <h3>{message.username}</h3>
            <h3>{message.content} </h3>
            <h3>{message.sentAt}</h3>
            <h3>{message.roomId}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default MessageList;
