import React from "react";
import "./style.css";

const CardSearch = () => (
	<header className = "card mt-4">
        <div className = "card-header">
            <h3> 
                <i className = "fa fa-far fa-book" aria-hidden = "true"></i> Book Search
            </h3>
        </div>
        <div className = "card-body">
            <form>
                <div className = "form-group">
                    <label htmlFor = "Query">What Book are you looking for...</label>
                    <input className = "form-control" id = "Title" type = "text" placeholder = "Ready Player One" name = "q" required value></input>
                </div>
                <div className = "pull-right">
                    <button type = "submit" class = "btn btn-lg btn-secondary">Search
                    </button>
                    <button type="submit" onClick={(e) => props.handleSearchClick(e)}>Search</button>
                </div>
            </form>
        </div>
	</header>
);


export default CardSearch;