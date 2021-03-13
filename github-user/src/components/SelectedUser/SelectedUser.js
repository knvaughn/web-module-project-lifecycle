import React, { Component } from 'react';
import User from '../User/User';
import './SelectedUser.css';

class SelectedUser extends Component {
    render() { 
        return ( 
            <div className="SelectedUser">
                <User user={this.props.user} />
                {
                    this.props.followers && this.props.followers.length > 0 &&
                    <div className="vertical-line"></div>
                }
            </div>
        )
    }
}
 
export default SelectedUser;