import React from "react";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "./SearchContext";

class SearchBox extends React.Component {
  handleFormSubmit = event => {
    event.preventDefault();
    this.props.search();
  };

  render() {
    return (
      <Consumer>
        {context => (
          // `context` = `context` from App.js
          <div className="search-params">
            <form onSubmit={this.handleFormSubmit}>
              <label htmlFor="location">
                Location
                <input
                  onChange={context.handleLocationChange}
                  id="location"
                  value={context.location}
                  placeholder="Location"
                />
              </label>
              <label htmlFor="animal">
                Animal
                <select
                  id="animal"
                  value={context.animal}
                  onChange={context.handleAnimalChange}
                  onBlur={context.handleAnimalChange}
                >
                  <option />
                  {ANIMALS.map(animal => (
                    <option key={animal} value={animal}>
                      {animal}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="breed">
                Breed
                <select
                  id="breed"
                  value={context.breed}
                  onChange={context.handleBreedChange}
                  onBlur={context.handleBreedChange}
                  disabled={!context.breeds.length} // If nothing in the breeds list, disable.
                >
                  <option />
                  {context.breeds.map(breed => (
                    <option key={breed} value={breed}>
                      {breed}
                    </option>
                  ))}
                </select>
              </label>
              <button>Submit</button>
            </form>
          </div>
        )}
      </Consumer>
    );
  }
}

export default SearchBox;
