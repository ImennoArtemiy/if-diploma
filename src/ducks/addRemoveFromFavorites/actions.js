import {createAction} from "redux-actions";

export const addToFavorites = createAction('ADD_TO_FAVORITES')
export const removeFromFavorites = createAction('REMOVE_FROM_FAVORITES')
export const removeAllFromFavorites = createAction('REMOVE_ALL_FROM_FAVORITES')
