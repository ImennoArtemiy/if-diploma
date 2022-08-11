import {combineReducers} from "redux";
import userReducer from '../ducks/user/reducers'
import changeValueReducer from '../ducks/searchValue/reducers'
import goodReducer from '../ducks/getAllGoods/reducers'
import clickFilterReducer from '../ducks/clickFilter/reducers'
import preLoadReducer from '../ducks/preLoad/reducers'
import messageReducer from '../ducks/subscribeMessage/reducers'
import bagReducer from '../ducks/addRemoveFromBag/reducers'
import favoritesReducer from '../ducks/addRemoveFromFavorites/reducers'
import clickSearchReducer from '../ducks/clickSearch/reducers'

export default combineReducers({
    user: userReducer,
    search: changeValueReducer,
    goods: goodReducer,
    clickSearch: clickSearchReducer,
    clickFilter: clickFilterReducer,
    loading: preLoadReducer,
    subscribeMessage: messageReducer,
    bag: bagReducer,
    favorites: favoritesReducer,
})
