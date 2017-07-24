import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const LoginInfoComponent = ({ userName, logIn, logOut }) => (
    (userName)
        ? <h4>Logged in as {userName} <Button bsSize="small" onClick={logOut}>Log Out</Button></h4>
        : <Button bsSize="small" onClick={logIn}>Log In</Button>
);

LoginInfoComponent.propTypes = {
    userName: PropTypes.string.isRequired,
    logIn: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired
};

export default LoginInfoComponent;