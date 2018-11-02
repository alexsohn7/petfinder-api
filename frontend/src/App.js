import React, { Component } from "react";
import Pet from "./Pet";
import pf from "petfinder-client";
import { Provider } from "./SearchContext";
import Results from "./Results";
import Details from "./Details";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";

const petfinder = pf({
  key: "4c8bee94df59e3db37d639739e2681c0",
  secret: "8e1f0e6e93ef5ddff9a89c0948cfd728"
});

class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <h1> Adopt Me! </h1>
        </Link>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
          <SearchParams path="/search-params" />
        </Router>
      </div>
    );
  }
}

export default App;
