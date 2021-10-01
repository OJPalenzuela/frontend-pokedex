import { types } from "../types/types";


const initialState = {
    "abilities": [],
    "base_experience": 0,
    "forms": [],
    "game_indices": [],
    "height": 0,
    "held_items": [],
    "id": 1,
    "is_default": true,
    "location_area_encounters": "",
    "moves": [],
    "name": "",
    "order": 0,
    "past_types": [],
    "species": {},
    "sprites": {
        "front_default": "",
    },
    "stats": [],
    "types": [
        {
            "slot": 1,
            "type": {
                "name": "",
                "url": ""
            }
        }
    ],
    "weight": 0

}

const pokemonsReducer = (state = [], action) => {
  switch (action.type) {
    case types.getPokemons:
      return action.payload
    default:
      return state;
  }
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.getPokemon:
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

export { pokemonsReducer, infoReducer, pokemonReducer };