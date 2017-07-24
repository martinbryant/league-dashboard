import { combineReducers } from 'redux';

const userName = (state = '', action) => {
    switch (action.type) {
        case 'LOGIN_USER_SUCCESS':
            return action.userName;
        case 'LOGIN_USER_ERROR':
            return '';
        case 'LOGOUT_USER':
            return '';
        default:
            return state;
    }
};

const loading = (state = false, action) => {
    switch (action.type) {
        case 'LOGIN_USER_SUCCESS':
        case 'LOGIN_USER_ERROR':
            return false;
        case 'LOGIN_USER_STARTED':
            return true;
        default:
            return state;
    }
}

const login = combineReducers({
    userName,
    loading
});

export default login;