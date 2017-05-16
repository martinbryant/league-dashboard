import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import app from '../reducers/app-reducer';

export default function configureStore(initialState) {
    return createStore(app, initialState, composeWithDevTools(applyMiddleware(thunk, reduxImmutableStateInvariant())));
}