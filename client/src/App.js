import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
// import CardSearch from "./components/CardSearch";
// import CardResults from "./components/CardResults";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;


