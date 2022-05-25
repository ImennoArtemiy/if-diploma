import {handleActions} from 'redux-actions'
import {changeValue, clearValue} from "./actions";

export const initialState = ''

const searchValueReducer = {
    [changeValue] : (state = initialState, action) => action.payload,
    [clearValue] : (state = initialState,) =>  '',
}

export default handleActions(searchValueReducer, initialState)
