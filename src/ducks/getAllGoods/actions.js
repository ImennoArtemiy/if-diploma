import {createAction} from "redux-actions";
import {startLoading, stopLoading} from "../preLoad/actions";

export const getAllGoods = createAction('GET_ALL_GOODS')
export const getAllDresses = createAction('GET_ALL_DRESSES')
export const getAllTees = createAction('GET_ALL_TESS')
export const getAllSwimwear = createAction('GET_ALL_SWIMWEAR')
export const getAllDenim = createAction('GET_ALL_DENIM')
export const getAllTops = createAction('GET_ALL_TOPS')
export const getAllBeauty = createAction('GET_ALL_BEAUTY')

export const getGoods = (action) => {
    return async dispatch => {
        dispatch(startLoading())
        const response = await fetch('https://modnikky-api.herokuapp.com/api/catalog');
        const jsonData = await response.json();
        dispatch(stopLoading())
        dispatch(action(jsonData));
    };
};

// export const setPostEmail = (action, emailValue, setResponseMessage) => {
//     return async dispatch => {
//         dispatch(startLoading())
//         const response = await fetch('https://modnikky-api.herokuapp.com/api/subscription', {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify({email: `${emailValue}`})
//         })
//         const data = await response.json()
//         dispatch(stopLoading())
//         await setResponseMessage(data.message)
//     }
// }
