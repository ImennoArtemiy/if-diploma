import {handleActions} from 'redux-actions'
import {startLoading, stopLoading} from "./actions";

export const initialState = false

const loadReducer = {
    [startLoading]: (state = initialState) => true,
    [stopLoading]: (state = initialState) => false,
}

export default handleActions(loadReducer, initialState)
