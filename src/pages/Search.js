import React, { Component } from "react";


import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";



class Search extends Component {
  state = {
    search: "",
    breeds: [],
    results: [],
    error: ""
  };
  // When the component mounts, get a list of all available base breeds and update this.state.breeds
 
  handleInputChange = event => {
    // update the state with input change
    this.setState({ search: event.target.value });
  };
  
  render() {
    return (
      <div>
        
      </div>
    );
  }
}
export default Search;