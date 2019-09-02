import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import requireAuth from '../components/HOC/requireAuth';

class AdminListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map((admin) => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }

  render() {
    return (
      <div className="admins-list">
        <h3>List of Admins</h3>
        {this.renderAdmins()}
      </div>
    );
  }
}

const mapStateToProps = ({ admins }) => ({ admins });

export default {
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminListPage)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
