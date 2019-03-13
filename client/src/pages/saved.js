import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import CardSaved from "../components/CardSaved";
// import API from "../utils/API";
// import { Link } from "react-router-dom";


class Search extends Component {

render() {
    return (
        <div>
          <Jumbotron />
          <CardSaved />
        </div>
    );
  }

}

export default Search;