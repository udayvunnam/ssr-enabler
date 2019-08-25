import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";
export class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return <div>Here's user list</div>;
  }
}

const mapStateToProps = state => {
  return { users: state.props };
};

export default connect(
  mapStateToProps,
  { fetchUsers }
)(UserList);
