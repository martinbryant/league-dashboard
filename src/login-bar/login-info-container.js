import { connect } from 'react-redux';
import { push } from 'redux-json-router';

import LoginInfoComponent from './login-info-component';
import { logoutUser } from '../actions/login-actions';

const mapStateToProps = state => {
    const { userName } = state.login;
    return {
        userName
    };
};

const mapDispatchToProps = dispatch => ({
    logIn: () => dispatch(push('/login')),
    logOut: () => dispatch(logoutUser()) && dispatch(push('/'))
});

const LoginInfoContainer = connect(mapStateToProps, mapDispatchToProps)(LoginInfoComponent);

export default LoginInfoContainer;