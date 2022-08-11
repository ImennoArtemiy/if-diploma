import {handleActions} from "redux-actions";
import {addToFavorites, removeAllFromFavorites, removeFromFavorites} from "./actions";

const initialState = []

const favoritesReducer = {
    [addToFavorites]: (state = initialState, action) => [...state, action.payload],
    [removeFromFavorites]: (state = initialState, action) => state.filter(item => item.id !== action.payload),
    [removeAllFromFavorites]: (state = initialState) => []
}

export default handleActions(favoritesReducer, initialState)
