import {handleActions} from "redux-actions";
import {clickSearch} from "./actions";

const initialState = false

const clickSearchReducer = {
    [clickSearch]: (state = initialState) => true
}

export default handleActions(clickSearchReducer, initialState)
