import { connect } from 'react-redux';
import { push } from 'redux-json-router';

import LoginInfoComponent from './login-info-component';

const mapStateToProps = state => {
    // const { userName } = state;
    const userName = '';
    return {
        userName
    };
};

const mapDispatchToProps = dispatch => ({
    logIn: () => dispatch(push('/login')),
    logOut: () => dispatch(push('/'))
});

const LoginInfoContainer = connect(mapStateToProps, mapDispatchToProps)(LoginInfoComponent);

export default LoginInfoContainer;