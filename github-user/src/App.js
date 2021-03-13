import React, { Component } from 'react';
import axios from 'axios';
import SelectedUser from './components/SelectedUser/SelectedUser';
import Followers from './components/Followers/Followers';
import Search from './components/Search/Search';
import './App.css';

class App extends Component {
  state = {
    user: null,
    followers: null,
    searchError: false
  }

  componentDidMount() {
    this.getUser('knvaughn');
    this.getFollowers('knvaughn');
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
      this.setState({followers: response.data})
      console.log(this.state.followers)
    })
    .catch(error => console.log(error));
  }

  submitSearch = (searchTerm) => {
    this.getUser(searchTerm);
    this.getFollowers(searchTerm);
  }

  render() {
    return (
      <div className="App">
        <Search submitSearch={this.submitSearch} searchError={this.state.searchError} />
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
