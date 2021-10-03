import { types } from "../types/types";



const favoriteReducer = (state = [], action) => {
    switch (action.type) {
        case types.addFavorite:
            return action.payload
        default:
            return state;
    }
};

export { favoriteReducer };