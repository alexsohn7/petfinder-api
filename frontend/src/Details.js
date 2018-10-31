import React, { Component } from "react";
import pf from "petfinder-client";
import { navigate } from "@reach/router";

const petfinder = pf({
  key: "4c8bee94df59e3db37d639739e2681c0",
  secret: "8e1f0e6e93ef5ddff9a89c0948cfd728"
});

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    petfinder.pet
      .get({
        output: "full",
        id: this.props.id
      })
      .then(data => {
        const pet = data.petfinder.pet;
        let breed;
        if (Array.isArray(pet.breeds.breed)) {
          breed = pet.breeds.breed.join(", ");
        } else {
          breed = pet.breeds.breed;
        }

        this.setState({
          name: pet.name,
          animal: pet.animal,
          location: `${pet.contact.city}, ${pet.contact.state}`,
          description: pet.description,
          media: pet.media,
          breed,
          loading: false
        });
      })
      .catch(() => {
        navigate("/");
      });
  }
  render() {
    if (this.state.loading) {
      return <h1> Loading.. </h1>;
    }
    const { name, animal, breed, location, description } = this.state;

    return (
      <div className="details">
        <div>
          <h1> {name} </h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>

          <p>{description} </p>
        </div>
      </div>
    );
  }
}

export default Details;