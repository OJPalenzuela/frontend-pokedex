import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducer";
import { favoriteReducer } from "./reducers/favoriteReducer";
import { pokemonReducer, pokemonsReducer } from "./reducers/pokemonReducer";


const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  auth: authReducer,
  pokemons: pokemonsReducer,
  pokemon: pokemonReducer,
  favorite: favoriteReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
