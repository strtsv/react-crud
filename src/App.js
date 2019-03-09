import React, { Component } from 'react';
import MainForm from './MainForm';
import AllUsers from './AllUsers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainForm />
        <AllUsers />
      </div>
    );
  }
}

export default App;
