import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newName = this.getName.value;
  const newSurname = this.getSurname.value;
  const data = {
    newName,
    newSurname
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.user.id, data: data });
}
render() {
return (
<div>
  <form onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getName = input}
    defaultValue={this.props.user.name} placeholder="Name" />
    <input required type="text" ref={(input)=>this.getSurname = input} defaultValue={this.props.user.surname}
    placeholder="Second name"/>
    <br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);