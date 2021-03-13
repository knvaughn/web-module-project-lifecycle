import React, { Component } from 'react';
import User from '../User/User';

class SelectedUser extends Component {
    state = { 

    }
    render() { 
        return ( 
            <div>
                <User user={this.props.user} />
            </div>
        )
    }
}
 
export default SelectedUser;