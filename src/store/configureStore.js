import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'redux-json-router';

import data from '../reducers/data-reducer';
import ui from '../reducers/ui-reducer';
import login from '../reducers/login-reducer';
import leaguesApi from '../api/leaguesApi';

const reducer = combineReducers({
    router: routerReducer,
    data,
    ui,
    login
});

const middleware = history => (
    composeWithDevTools(applyMiddleware(
        routerMiddleware(history),
        thunk.withExtraArgument(leaguesApi),
        reduxImmutableStateInvariant())));

export default function configureStore(history, initialState) {
    return createStore(reducer, initialState, middleware(history));
}