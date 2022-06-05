import {combineReducers} from "redux";
import userReducer from '../ducks/user/reducers'
import changeValueReducer from '../ducks/searchValue/reducers'
import goodReducer from '../ducks/getAllGoods/reducers'
import clickFilterReducer from '../ducks/clickFilter/reducers'
import preLoadReducer from '../ducks/preLoad/reducers'
import messageReducer from '../ducks/subscribeMessage/reducers'

export default combineReducers({
    user: userReducer,
    search: changeValueReducer,
    goods: goodReducer,
    clickFilter: clickFilterReducer,
    loading: preLoadReducer,
    subscribeMessage: messageReducer,
})
