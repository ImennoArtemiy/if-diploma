
import {handleActions} from "redux-actions";
import {getMessage} from "./actions";

const initialState = ''

const messageReducer = {
    [getMessage]: (state = initialState, action) => action.payload
    ,
}

export default handleActions(messageReducer, initialState)
