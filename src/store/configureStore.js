import { createStore, applyMiddleware } from 'redux';
import homePageReducer from '../homepage/homePageReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
return createStore(homePageReducer, initialState, applyMiddleware(thunk, reduxImmutableStateInvariant()));
}