import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile'

class App extends Component {
  state = {
    firstName: 'Bob',
    lastName: 'Jones',
    imageURL: 'https://randomuser.me/api/portraits/men/83.jpg'
  }

  onChangeFirstName = (event) => {
    const input = event.target // Get text field
    const newString = input.value // Current value in text field
    // setState will re-render our app with new state
    this.setState({
      firstName: newString // Change firstName to this new value
    })
  }

  render() {
    const { firstName, lastName, imageURL } = this.state

    return (
      <div className="App">
        <Profile firstName={ firstName } lastName={ lastName } imageURL={ imageURL } />
        <label>
          First name:
          <input value={ firstName } onChange={ this.onChangeFirstName } />
        </label>
      </div>
    );
  }
}

export default App;
