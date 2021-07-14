import React, { Component } from 'react';
import './Search.css';
class Search extends Component {
  render() {
    return (
      <form>
        <input type='text' placeholder='Margarita' />
        <button>Search Cocktails</button>
      </form>
    );
  }
}

export default Search;
