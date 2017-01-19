import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const CoreButton = ({disabled, buttonText, buttonClick}) => {
    function handleClick(e) {
        buttonClick(e.target.value);
    }

    return (
        <Button disabled={disabled} onClick={handleClick}>{buttonText}</Button>
    );
};

CoreButton.propTypes = {
    disabled : PropTypes.bool.isRequired,
    buttonText : PropTypes.string.isRequired,
    buttonClick : PropTypes.func.isRequired
};

export default CoreButton;