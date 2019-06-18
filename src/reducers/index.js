import { combineReducers } from 'redux';
import items from './itemsReducer';
import selectionReducer from './selectionReducer';

export default combineReducers ({
    items,
    selectedId: selectionReducer
})