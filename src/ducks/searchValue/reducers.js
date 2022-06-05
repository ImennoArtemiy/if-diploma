import {handleActions} from 'redux-actions'
import {changeValue, clearValue, findValue} from "./actions";

export const initialState = {
    value: '',
    result: []
}

const searchValueReducer = {
    [changeValue] : (state = initialState, action) => ({
        ...state,
        value: action.payload
    }),
    [clearValue] : (state = initialState) =>  ({
        ...state,
        value: ''
    }),
    [findValue] : (state = initialState, action) => ({
        ...state,
        result: action.payload.filter(i => (i.type).toLowerCase().includes(state.value.toLowerCase()) ||
            (i.name).toLowerCase().includes(state.value.toLowerCase())
        )
    }),

}

export default handleActions(searchValueReducer, initialState)
