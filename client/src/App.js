import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import CardSearch from "./components/CardSearch";
import CardResults from "./components/CardResults";


function App() {
  return (
      <div>
        <NavBar />
        <Jumbotron />
        <CardSearch />
        <CardResults />
      </div>
  );
}

export default App;

