import React, { Component } from 'react';
import Repositories from '../Repositories/Repositories';
import axios from 'axios';
import './User.css';

class User extends Component {
    state = { 
        repositories: null
    }

    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.props.user.login}/repos?sort=created&per_page=5`)
        .then(response => {
        this.setState({repositories: response.data})
        console.log(this.state.repositories)
        })
        .catch(error => console.log(error));
    }

    render() { 
        return ( 
            <div className="user-card">
                <div className="user-card-header">
                    <div className="user-card-logo">
                        <img src="github-logo.png" alt="Github logo" />
                    </div>
                    <div className="user-card-info">
                        <div className="user-card-image">
                            <img src={this.props.user.avatar_url} alt="Profile photo" />
                        </div>
                        <div className="user-card-details">
                            <h2>{this.props.user.login}</h2>
                            <p>{this.props.user.location}</p>
                            {
                                this.props.user.followers &&
                                <p><span>Followers: {this.props.user.followers}</span> | <span>Following: {this.props.user.following}</span></p>
                            }
                            <a href={this.props.user.html_url} target="_BLANK">View Profile</a>
                        </div>
                    </div>
                </div>
                <div className="user-card-repositories">
                    <h3>Repositories</h3>
                    {
                        this.state.repositories &&
                        <Repositories repositories={this.state.repositories} />
                    }
                </div>
            </div>
        )
    }
}
 
export default User;