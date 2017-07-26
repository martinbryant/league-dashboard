import { connect } from 'react-redux';
import { push } from 'redux-json-router';

import LoginInfoComponent from './login-info-component';
import { logoutUser } from '../actions/login-actions';

const mapStateToProps = state => {
    const { userName } = state.login;
    const { pathname } = state.router;
    return {
        userName,
        pathname
    };
};

const mapDispatchToProps = dispatch => ({
    logIn: () => dispatch(push('/login')),
    logOut: () => dispatch(logoutUser()) && dispatch(push('/'))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { pathname } = stateProps;
    const { logIn } = dispatchProps;
    return Object.assign({}, stateProps, dispatchProps, {
        logInIfNotThere: () => (pathname !== '/login') && logIn()
    });
};

const LoginInfoContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(LoginInfoComponent);

export default LoginInfoContainer;