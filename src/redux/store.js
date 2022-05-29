import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import {persistStore, persistReducer} from "redux-persist";
import LocalStorage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";


const persistConfig = {
    key: 'root',
    storage: LocalStorage,
    blacklist: [],
    whitelist: ['user'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
        reducer: persistedReducer,
        middleware: [thunk],
    }
)

export const persiStore = persistStore(store)

export default store
