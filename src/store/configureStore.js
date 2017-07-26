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

const sessionMiddleware = store => next => action => {
    if (action.type === 'LOGIN_USER_SUCCESS') {
        sessionStorage.setItem('user', action.userName);
    }
    if (action.type === 'LOGOUT_USER') {
        sessionStorage.removeItem('user');
    }
    next(action);
};

const middleware = history => (
    composeWithDevTools(applyMiddleware(
        routerMiddleware(history),
        thunk.withExtraArgument(leaguesApi),
        reduxImmutableStateInvariant(),
        sessionMiddleware
    )));

export default function configureStore(history, initialState) {
    return createStore(reducer, initialState, middleware(history));
}