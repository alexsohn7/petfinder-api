import React, { Component } from "react";
import pf, { ANIMALS } from "petfinder-client";

const petfinder = pf({
  key: "4c8bee94df59e3db37d639739e2681c0",
  secret: "8e1f0e6e93ef5ddff9a89c0948cfd728"
});

class SearchParams extends Component {
  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          Location
          <input
            onChange={this.handleLocationChange}
            id="location"
            value={this.state.location}
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          <select
            id="animal"
            value={this.state.animal}
            onChange={this.handleAnimalChange}
            onBlur={this.handleAnimalChange}
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}{" "}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={this.state.breed}
            onChange={this.handleBreedChange}
            onBlur={this.handleBreedChange}
            disabled={this.state.breeds.length === 0}
          >
            <option />
            {this.state.breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button> submit </button>
      </div>
    );
  }
}

export default SearchParams;
