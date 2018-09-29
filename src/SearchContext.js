import React from "react";

const SearchContext = React.createContext({
  // .createContext creates two components: Provider and Consumer.
  // Provider makes all data available underneath it, and Consumer reads from the Provider.
  location: "Minneapolis, MN",
  animal: "",
  breed: "",
  breeds: "",
  handleAnimalChange() {},
  handleBreedChange() {},
  handleLocationChange() {},
  getBreeds() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
