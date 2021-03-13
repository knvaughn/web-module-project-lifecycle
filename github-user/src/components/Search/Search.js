import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
    state = { 
        searchTerm: ''
    }

    updateSearchTerm = (searchTerm) => {
        this.setState({searchTerm: searchTerm});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.submitSearch(this.state.searchTerm);
    }

    render() { 
        return ( 
            <div className="Search">
                <form onSubmit={this.handleFormSubmit}>
                    <input 
                        type="search"
                        name="search"
                        value={this.state.searchTerm}
                        onChange={(event)=>{this.updateSearchTerm(event.target.value)}}
                    />
                    <button>Search</button>
                </form>
                {
                    this.props.searchError &&
                    <p className="no-results">No results found</p>
                }
            </div>
        )
    }
}
 
export default Search;