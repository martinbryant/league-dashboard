import { goBack } from 'redux-json-router';

import loginApi from '../api/loginApi';

export const loginUserStarted = () => ({
    type: 'LOGIN_USER_STARTED'
});

export const loginUserSuccess = userName => ({
    type: 'LOGIN_USER_SUCCESS',
    userName
});

export const loginUserError = userName => ({
    type: 'LOGIN_USER_ERROR',
    userName
});

export const logoutUser = () => ({
    type: 'LOGOUT_USER'
});

export const loginUser = (userName, password) => (dispatch) => {
    dispatch(loginUserStarted());
    return loginApi.loginUser(userName, password)
        .then(user => (user)
            ? dispatch(loginUserSuccess(user)) & dispatch(goBack())
            : dispatch(loginUserError(user)))
        .catch(error => { throw (error); });
};