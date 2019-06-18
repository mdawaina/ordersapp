import { SELECT_ITEM } from '../constants'

export default (state = null, action) => {
    switch (action.type) {
        case SELECT_ITEM:
            return action.payload;
        default:
            return state;
    }
};