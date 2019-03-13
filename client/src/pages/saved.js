import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import CardSaved from "../components/CardSaved";
import API from "../utils/API";
// import { Link } from "react-router-dom";


class Search extends Component {

    loadBooks = () => {
        API.getBooks()
          .then(res =>
            this.setState({ books: res.data, title: "", author: "", synopsis: "" })
          )
          .catch(err => console.log(err));
      };
    
      deleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };

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