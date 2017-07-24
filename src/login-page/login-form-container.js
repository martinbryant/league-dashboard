import React from 'react';
import { connect } from 'react-redux';

import LoginFormComponent from './login-form-component';
import { loginUser } from '../actions/login-actions';

const mapStateToProps = state => ({
    loading: state.login.loading
});

const mapDispatchToProps = dispatch => ({
    processLogin: e => {
        const userName = e.target['userName'].value;
        const password = e.target['password'].value;
        e.preventDefault();
        dispatch(loginUser(userName, password));
    }
});

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginFormComponent);

export default LoginFormContainer;