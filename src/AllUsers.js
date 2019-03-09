import React, { Component } from 'react';

import { connect } from 'react-redux';

import User from './User';

import EditComponent from './EditComponent';

class AllUsers extends Component {
  render() {
    return (
    <div>
      <h2>All users</h2>
      {this.props.users.map((user) => (
        <div key={user.id}>
          {user.editing ? <EditComponent user={user} key={user.id} /> : <User key={user.id} user={user} />}
        </div>
      ))}
    </div>
    );
   }
}

const mapStateToProps = (state) => {
  return {
      users: state
  }
}
export default connect(mapStateToProps)(AllUsers);