import {handleActions} from "redux-actions";
import {clickFilter} from "./actions";

const initialState = false

const clickFilterReducer = {
    [clickFilter]: (state = initialState) => true
}

export default handleActions(clickFilterReducer, initialState)
