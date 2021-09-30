import { types } from "../types/types";


const pokemonsReducer = (state = [], action) => {
  switch (action.type) {
    case types.getPokemons:
      return action.payload
    default:
      return state;
  }
};

export { pokemonsReducer };