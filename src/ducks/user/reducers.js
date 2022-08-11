import {handleActions} from 'redux-actions'
import {
    setFirstName,
    setLastName,
    setPassword,
    setEmail,
    logout,
    login,
    enteredTheMainPage,
    outOfTheMainPage,
    enteredTheFavorites, outOfTheMainFavorites, outOfTheFavorites
} from "./actions";

export const initialState = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    isLogged: false,
    userInMainPage: true,
    userInFavorites: false,
}

const userReducer = {
    [setFirstName]: (state = initialState, action) => ({
        ...state,
        firstName: action.payload,
    }),
    [setLastName]: (state = initialState, action) => ({
        ...state,
        lastName: action.payload,
    }),
    [setEmail]: (state = initialState, action) => ({
        ...state,
        email: action.payload,
    }),
    [setPassword]: (state = initialState, action) => ({
        ...state,
        password: action.payload,
    }),
    [login]: (state = initialState) => ({
        ...state,
        isLogged: true
    }),
    [logout]: (state = initialState) => ({
        ...state,
        isLogged: false
    }),
    [enteredTheMainPage]: (state = initialState) => ({
        ...state,
        userInMainPage: true
    }),
    [outOfTheMainPage]: (state = initialState) => ({
        ...state,
        userInMainPage: false
    }),
    [enteredTheFavorites]: (state = initialState) => ({
        ...state,
        userInFavorites: true
    }),
    [outOfTheFavorites]: (state = initialState) => ({
        ...state,
        userInFavorites: false
    }),
}

export default handleActions(userReducer, initialState)
