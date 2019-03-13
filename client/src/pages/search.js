import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import CardSearch from "../components/CardSearch";
import CardResults from "../components/CardResults";
import API from "../utils/API";
import { Link } from "react-router-dom";


class Search extends Component {

  constructor(props) {
    this.state = {
      bookSearch: "",
      bookData: []
    }
    // This binding is necessary to make `this` work in the callback
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = event => {
    event.preventDefault();
    this.setState({bookSearch: event.target.value})
  };

  handleSearchClick = event => {
    event.preventDefault();
    API.searchBooks(this.state.bookInput)
      .then(res => {
        this.setState({bookData: res.data});
        this.setState({bookSearch: ""})
      })
      .catch(err => console.log(err));
  }
  

  render() {
    return (
        <CardSearch 
          handleChange = {this.handleChange} 
          handleSearchClick = {this.handleSearchClick}
        />
    );
  }
}

export default Search;
