import React, { Component } from 'react';
import axios from 'axios';
import SelectedUser from './components/SelectedUser/SelectedUser';
import Followers from './components/Followers/Followers';
import './App.css';

class App extends Component {
  state = {
    user: null,
    followers: null
  }

  componentDidMount() {
    this.getUser('knvaughn');
    this.getFollowers('knvaughn');
  }

  getUser(username) {
    axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      this.setState({user: response.data})
      console.log(this.state.user)
    })
    .catch(error => console.log(error));
  }

  getFollowers(username) {
    axios.get(`https://api.github.com/users/${username}/followers`)
    .then(response => {
      this.setState({followers: response.data})
      console.log(this.state.followers)
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
        {
          this.state.followers &&
          <Followers followers={this.state.followers} />
        }
      </div>
    )
  }
}

export default App;
