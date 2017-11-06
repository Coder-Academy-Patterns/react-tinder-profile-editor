import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile'

class App extends Component {
  state = {
    firstName: 'Bob',
    lastName: 'Jones',
    imageURL: 'https://randomuser.me/api/portraits/men/83.jpg'
  }

  render() {
    const { firstName, lastName, imageURL } = this.state

    return (
      <div className="App">
        <Profile firstName={ firstName } lastName={ lastName } imageURL={ imageURL } />
      </div>
    );
  }
}

export default App;
