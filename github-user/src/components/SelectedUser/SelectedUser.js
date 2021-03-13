import React, { Component } from 'react';
import User from '../User/User';
import './SelectedUser.css';

class SelectedUser extends Component {
    render() { 
        return ( 
            <div className="SelectedUser">
                <User user={this.props.user} />
                <div className="vertical-line"></div>
            </div>
        )
    }
}
 
export default SelectedUser;