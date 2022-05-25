import {createAction} from "redux-actions";

export const setFirstName = createAction('SET_FIRST_NAME')
export const setLastName = createAction('SET_LAST_NAME')
export const setEmail = createAction('SET_EMAIL')
export const setPassword = createAction('SET_PASSWORD')

export const login = createAction('LOGIN')
export const logout = createAction('LOGOUT')
