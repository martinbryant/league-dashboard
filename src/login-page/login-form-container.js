import React from 'react';
import { connect } from 'react-redux';

import LoginFormComponent from './login-form-component';

const mapStateToProps = state => null;

const mapDispatchToProps = dispatch => ({
    processLogin: e => {
        const userName = e.target['userName'].value;
        const password = e.target['password'].value;
        e.preventDefault();
        //dispatch(login);
    }
});

const LoginFormContainer = connect(null, mapDispatchToProps)(LoginFormComponent);

export default LoginFormContainer;