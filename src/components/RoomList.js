import React, { Component } from "react";

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      newRoomName: ""
    };
    this.roomsRef = this.props.firebase.database().ref("rooms");
  }

  componentDidMount() {
    this.roomsRef.on("child_added", snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat(room) });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.createRoom(this.state.newRoomName);
  }

  handleChange(e) {
    this.setState({ newRoomName: e.target.value });
  }

  createRoom(newRoomName) {
    this.roomsRef.push({
      name: newRoomName
    });
    this.setState({ newRoomName: "" });
  }

  render() {
    return (
      <div>
        {this.state.rooms.map((room, key) => (
          <div key={room.key}>
            <h3>{room.name}</h3>
          </div>
        ))}
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            <input
              type="text"
              name="name"
              value={this.state.newRoomName}
              onChange={e => this.handleChange(e)}
            />
          </label>
          <input type="submit" className="btn btn-info" value="New Room" />
        </form>
      </div>
    );
  }
}

export default RoomList;
