import { types } from "../types/types";

const initialState = {
  id: 0,
  name: "",
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        id: action.payload.id,
        name: action.payload.displayName,
        isAuthenticated: action.payload.isAuthenticated,
      };
    case types.logout:
      return {
        id: initialState.id,
        name: initialState.name,
        isAuthenticate: false,
      };
    default:
      return state;
  }
};

export { authReducer, initialState };