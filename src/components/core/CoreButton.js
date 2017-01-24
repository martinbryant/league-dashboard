import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';

const CoreButton = ({value, disabled, buttonText, buttonClick}) => {
    function handleClick() {
        buttonClick(value);
    }

    return (
        <Button value={value} disabled={disabled} onClick={handleClick}>{buttonText}</Button>
    );
};

CoreButton.propTypes = {
    value : PropTypes.string.isRequired,
    disabled : PropTypes.bool.isRequired,
    buttonText : PropTypes.string.isRequired,
    buttonClick : PropTypes.func.isRequired
};

export default CoreButton;