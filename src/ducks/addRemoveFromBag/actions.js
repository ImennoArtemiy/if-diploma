import {createAction} from "redux-actions";

export const addToBag = createAction('ADD_TO_BAG')
export const removeFromBag = createAction('REMOVE_FROM_BAG')
export const removeAllFromBag = createAction('REMOVE_ALL_FROM_BAG')
