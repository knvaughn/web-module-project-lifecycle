import React, { Component } from 'react';
import './Repository.css';

class Repository extends Component {
    state = { 

    }
    render() { 
        return ( 
            <div>
                <h4><a href={this.props.repository.html_url} target="_BLANK">{this.props.repository.name}</a></h4>
            </div>
        )
    }
}
 
export default Repository;