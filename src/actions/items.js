import { ITEM_LOAD, ITEM_LOAD_SUCCESS, ITEM_LOAD_FAIL, SELECT_ITEM } from '../constants';
import { Actions } from 'react-native-router-flux';
import http from '../services/httpService';

const endpintUrl = '/items/item';

export const getItems = (items) => {
    return {
        type: ITEM_LOAD_SUCCESS,
        payload: {
            items
        }
    }
}

export const fetchItems = () => {
    return dispatch => {
        dispatch({type: ITEM_LOAD});

        return http
        .get(`${endpintUrl}`)
        //.then(sleeper(2000))
        .then(response => {
            
            dispatch(getItems(response.data));
        }).catch(error => {
            dispatch({ type: ITEM_LOAD_FAIL, payload: error });
            console.log(error);
        })
    }
}

export const selectItem = (dispatch,itemId) => {
   
   /*  dispatch({
        type: SELECT_ITEM,
        payload: itemId
    }); */
    Actions.sizes();
   
}

function sleeper(ms) {
    return function (x) {
        return new Promise(resolve => setTimeout(() => resolve(x), ms));
    };
}