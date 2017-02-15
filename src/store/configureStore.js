import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import homePage from '../homepage/homePageReducer';

export default function configureStore(initialState){
return createStore(homePage, initialState, applyMiddleware(thunk, reduxImmutableStateInvariant()));
}