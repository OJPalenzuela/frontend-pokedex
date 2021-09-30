import { types } from "../types/types";


const pokemonsReducer = (state = [], action) => {
  switch (action.type) {
    case types.getPokemons:
      return action.payload
    default:
      return state;
  }
};

const infoReducer = (state = [], action) => {
  switch (action.type) {
    case types.getInfoPokemons:
      return action.payload
    default:
      return state;
  }
};

export { pokemonsReducer, infoReducer };