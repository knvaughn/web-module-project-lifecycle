import React, { Component } from 'react';
import axios from 'axios';
import SelectedUser from './components/SelectedUser/SelectedUser';
import Followers from './components/Followers/Followers';
import Search from './components/Search/Search';
import './App.css';

class App extends Component {
  state = {
    username: 'knvaughn',
    user: null,
    followers: null,
    searchError: false
  }

  componentDidMount() {
    this.getUser(this.state.username);
    this.getFollowers(this.state.username);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.username !== this.state.username) {
      this.getUser(this.state.username);
      this.getFollowers(this.state.username);
    }
  }

  getUser = (username) => {
    axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      this.setState({user: response.data})
      this.setState({searchError: false});
    })
    .catch(error => {
      console.log(error);
      this.setState({searchError: true});
    });
  }

  getFollowers = (username) => {
    axios.get(`https://api.github.com/users/${username}/followers`)
    .then(response => {
      this.setState({followers: response.data});
    })
    .catch(error => console.log(error));
  }

  submitSearch = (searchTerm) => {
    this.setState({username: searchTerm});
  }

  render() {
    return (
      <div className="App">
        <h1>Github Users</h1>
        <Search submitSearch={this.submitSearch} searchError={this.state.searchError} />
        <img className="github-chart" src={`https://ghchart.rshah.org/409ba5/${this.state.username}`} alt={`${this.state.username}'s Blue Github Chart`} />
        {
          this.state.user &&
          <SelectedUser user={this.state.user} followers={this.state.followers} />
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
