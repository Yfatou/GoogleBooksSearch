import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import CardSearch from "../components/CardSearch";
import CardResults from "../components/CardResults";
// import API from "../utils/API";
// import { Link } from "react-router-dom";


class Search extends Component {

render() {
    return (
        <div>
          <Jumbotron />
          <CardSearch />
          <CardResults />
        </div>
    );
  }

}

export default Search;