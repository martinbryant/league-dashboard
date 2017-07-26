import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const LoginInfoComponent = ({ userName, logInIfNotThere, logOut }) => (
    (userName)
        ? <h4>Logged in as {userName} <Button bsSize="small" onClick={logOut}>Log Out</Button></h4>
        : <Button bsSize="small" onClick={logInIfNotThere}>Log In</Button>
);

LoginInfoComponent.propTypes = {
    userName: PropTypes.string.isRequired,
    logInIfNotThere: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired
};

export default LoginInfoComponent;