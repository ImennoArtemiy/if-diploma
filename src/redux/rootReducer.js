import {combineReducers} from "redux";
import userReducer from '../ducks/user/reducers'
import changeValueReducer from '../ducks/searchValue/reducers'

export default combineReducers({
    user: userReducer,
    searchValue: changeValueReducer,
})
