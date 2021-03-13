import React, { Component } from 'react';
import axios from 'axios';
import SelectedUser from './components/SelectedUser/SelectedUser';
import Followers from './components/Followers/Followers';
import './App.css';

class App extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/knvaughn')
    .then(response => {
      this.setState({user: response.data})
      console.log(this.state.user)
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        {
          this.state.user &&
          <SelectedUser user={this.state.user} />
        }
        <Followers />
      </div>
    )
  }
}

export default App;
