import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'redux-json-router';

import app from '../reducers/app-reducer';
import data from '../reducers/data-reducer';
import ui from '../reducers/ui-reducer';

const reducer = combineReducers({
    router: routerReducer,
    data,
    ui
});

const middleware = history => composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk, reduxImmutableStateInvariant()));

export default function configureStore(history, initialState) {
    return createStore(reducer, initialState, middleware(history));
}