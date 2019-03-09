import React, { Component } from 'react';
import {connect} from 'react-redux';

class MainForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.getName.value;
    const surname =  this.getSurname.value;
    const data = {
      id: new Date(),
      name,
      surname,
      editing:false
    }
    this.props.dispatch({
      type:'ADD_USER',
      data});
    this.getName.value = '';
    this.getSurname.value = '';
    console.log(data)
  }
render() {
return (
<div>
  <h1>Add a user</h1>
  <form onSubmit={this.handleSubmit}>
   <input required type="text" ref={(input)=>this.getName = input} 
    placeholder="Name"/>
  <input required type="text" ref={(input)=>this.getSurname = input} 
    placeholder="Second name"/>
   <br />
   <button>Add</button>
  </form>
</div>
);
}
}
export default connect()(MainForm);