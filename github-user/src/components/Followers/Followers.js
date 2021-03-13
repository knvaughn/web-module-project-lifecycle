import React, { Component } from 'react';
import User from '../User/User';
import './Followers.css';

class Followers extends Component {
    render() { 
        return ( 
            <div className="Followers">
                {
                    this.props.followers.map((follower, index) => {
                        return <User user={follower} key={index} />
                    })
                }
            </div>
        )
    }
}
 
export default Followers;