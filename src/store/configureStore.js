import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import app from '../reducers/app-reducer';

export default function configureStore(initialState){
return createStore(app, initialState, applyMiddleware(thunk, reduxImmutableStateInvariant()));
}