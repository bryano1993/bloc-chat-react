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

  chooseRoom(room) {
    this.props.currentRoom(room);
  }

  render() {
    const roomIndex = this.state.rooms.map((room, key) => (
      <h4 key={room.key} onClick={e => this.chooseRoom(room)}>
        {room.name}
      </h4>
    ));
    const roomDisplay = (
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
    );

    return (
      <div>
        <div>{roomDisplay}</div>
        <div>{roomIndex}</div>
      </div>
    );
  }
}

export default RoomList;
