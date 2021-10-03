import { types } from "../types/types";

const initialState = {
  uid: "",
  name: "",
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case types.login:
          return {
              uid: action.payload.uid,
              name: action.payload.displayName,
              isAuthenticated: true,
          }
      case types.logout:
          return initialState

      default:
          return state;
  }
}



export { authReducer };