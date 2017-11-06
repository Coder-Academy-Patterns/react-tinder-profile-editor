import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Profile firstName='Bob' lastName='Jones' imageURL='https://randomuser.me/api/portraits/men/83.jpg' />
      </div>
    );
  }
}

export default App;
