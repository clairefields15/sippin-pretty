import React, { Component } from 'react';

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
