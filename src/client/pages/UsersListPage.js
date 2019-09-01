import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => <li key={user.id}>{user.name}</li>);
  }

  render() {
    return (
      <div className="users-list">
        <h1>Here is a list of users</h1>
        {this.renderUsers()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ users: state.users });

const loadData = (store) => store.dispatch(fetchUsers());

export default {
  loadData,
  component: connect(
    mapStateToProps,
    { fetchUsers },
  )(UsersList),
};
