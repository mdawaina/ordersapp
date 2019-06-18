import { ITEM_LOAD,ITEM_LOAD_SUCCESS, ITEM_LOAD_FAIL } from '../constants';

const INITIAL_STATE = {
    data:[],
    isLoading: false,
    hasError: false,
    errorMessage: ''
}
export default function items(state = INITIAL_STATE, action) {
    switch(action.type) {
       
        case ITEM_LOAD: {
            return Object.assign({}, state, {isLoading: true});
        }

        case ITEM_LOAD_SUCCESS: {
            return { ...state, isLoading: false, data: action.payload.items};
            //return Object.assign({}, state, { isLoading: false, data: action.payload.items });
        }

        case ITEM_LOAD_FAIL: {
            return Object.assign({}, state, { isLoading: false, hasError: true, errorMessage: action.error});
        }
        
        default: {
            return state;
        }
    }
}

