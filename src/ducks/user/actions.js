import {createAction} from "redux-actions";

export const setFirstName = createAction('SET_FIRST_NAME')
export const setLastName = createAction('SET_LAST_NAME')
export const setEmail = createAction('SET_EMAIL')
export const setPassword = createAction('SET_PASSWORD')

export const login = createAction('LOGIN')
export const logout = createAction('LOGOUT')

export const enteredTheMainPage = createAction('ENTERED_THE_MAIN_PAGE')
export const outOfTheMainPage = createAction('OUT_OF_THE_MAIN_PAGE')

export const enteredTheFavorites = createAction('ENTERED_THE_FAVORITES')
export const outOfTheFavorites = createAction('OUT_OF_THE_FAVORITES')
