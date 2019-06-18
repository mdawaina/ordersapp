import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
//import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from '../reducers';
const INITIAL_STATE = {
   
};
export const configureStore = () => {
    const store = createStore(rootReducer,{}, applyMiddleware(thunk));
    return store;
}
