import React, { Component } from 'react';

import { connect } from 'react-redux';

class User extends Component {
  render() {
  return (
    <div>
      <span>{this.props.user.name.trim()}</span>
      <span> {this.props.user.surname.trim()} </span>
      <button
      onClick={()=>this.props.dispatch({type:'EDIT_USER',id:this.props.user.id})}>Edit</button>
      <button 
      onClick={()=>this.props.dispatch({type:'DELETE_USER',id:this.props.user.id})}>
      Delete</button>
    </div>
  );
 }
}
export default connect()(User);