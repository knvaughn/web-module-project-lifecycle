import React, { Component } from 'react';
import Repository from '../Repository/Repository';

class Repositories extends Component {
    render() { 
        return ( 
            <div>
                {
                    this.props.repositories.map((repository, index) => {
                        return <Repository repository={repository} key={index} />
                    })
                }
                {
                    this.props.repositories.length === 0 &&
                    <p>No repositories to show</p>
                }
            </div>
        )
    }
}
 
export default Repositories;