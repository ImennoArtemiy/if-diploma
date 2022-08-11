import {
    getAllDenim,
    getAllDresses,
    getAllGoods,
    getAllSwimwear,
    getAllTees,
    getAllTops,
} from "./actions";
import {handleActions} from "redux-actions";


const initialState = []


const goodReducer = {
    [getAllGoods]: (state = initialState, action) => action.payload
    ,
    [getAllDresses]: (state = initialState, action) => action.payload.filter(i => i.type === 'Dresses')
    ,
    [getAllTees]: (state = initialState, action) => action.payload.filter(i => i.type === 'Tees')
    ,
    [getAllSwimwear]: (state = initialState, action) => action.payload.filter(i => i.type === 'Swimwear')
    ,
    [getAllDenim]: (state = initialState, action) => action.payload.filter(i => i.type === 'Denim')
    ,
    [getAllTops]: (state = initialState, action) => action.payload.filter(i => i.type === 'Tops')
    ,
}

export default handleActions(goodReducer, initialState)
