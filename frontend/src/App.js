import React, { Component } from "react";
import Pet from "./Pet";
import pf from "petfinder-client";

const petfinder = pf({
  key: "4c8bee94df59e3db37d639739e2681c0",
  secret: "8e1f0e6e93ef5ddff9a89c0948cfd728"
});

class App extends Component {
  componentDidMount() {
    const promise = petfinder.breed.list({ animal: "dog" });

    promise.then(console.log, console.error);
  }

  render() {
    return (
      <div className="App">
        <h1 onClick={this.handleTitleClick}> Adopt Me! </h1>
        <Pet name="Luna" animal="dog" breed="Havanese" />
        <Pet name="Pepper" animal="bird" breed="Cockatiel" />
        <Pet name="Doink" animal="cat" breed="Mixed" />
      </div>
    );
  }
}

export default App;
