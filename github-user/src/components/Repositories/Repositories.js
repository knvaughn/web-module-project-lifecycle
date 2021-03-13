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
            </div>
        )
    }
}
 
export default Repositories;