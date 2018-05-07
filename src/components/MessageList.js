import React, { Component } from "react";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      content: "",
      sentAt: "",
      roomId: "",
      messages: []
    };
    this.messagesRef = this.props.firebase.database().ref("messages");
  }


  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat(message) });
    });
  }


  createMessage = e => {
    e.preventDefault();
    this.messagesRef.push({
      username: this.state.username,
      content: this.state.content,
      sentAt: this.state.sentAt,
      roomId: this.state.roomId
    });
    this.setState({
      username: "",
      content: "",
      sentAt: "",
      roomId: ""
    })
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      username: "user",
      content: e.target.value,
      sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
      roomId: this.props.activeRoom.key
    });
  }


  render() {

    const activeRoom = this.props.activeRoom.key;

    const messageIndex = this.state.messages.map(message => {
      if (message.roomId === activeRoom) {
        return <h5 key={message.key}>{message.content}</h5>;
      }
      return null;
    });

    const messageDisplay = (
      <form onSubmit={this.createMessage}>
        <input type="text"
          value={this.state.content}
          placeholder="Enter message here"
          onChange={this.handleChange}
        />
        <input type="submit" value="Send Message" className="btn btn-info" />
      </form>
    );

    return (
      <div>
        <div>{messageIndex}</div>
        <div>{messageDisplay}</div>
      </div>
    );
  }
}


export default MessageList;