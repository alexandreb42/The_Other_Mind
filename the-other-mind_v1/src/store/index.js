import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';

import rootReducers from "../reducers";

export default function configureStore(initialState) {
    const store = createStore( rootReducers, initialState,
        applyMiddleware(thunk) );
    return store;
}
