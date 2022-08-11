import {handleActions} from "redux-actions";
import {addToBag, removeAllFromBag, removeFromBag} from "./actions";

const initialState = []

const bagReducer = {
    [addToBag]: (state = initialState, action) => [...state, action.payload],
    [removeFromBag]: (state = initialState, action) => state.filter(item => item.id !== action.payload),
    [removeAllFromBag]: (state = initialState) => []
}

export default handleActions(bagReducer, initialState)
