import {createStore} from "redux";
import rootReducer from "./rootReducer";
import {persistStore, persistReducer} from "redux-persist";
import LocalStorage from 'redux-persist/lib/storage'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__

const persistConfig = {
    key: 'root',
    storage: LocalStorage,
    blacklist: [],
    whitelist: ['user'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    devTools()
)


export const persiStore = persistStore(store)

export default store
