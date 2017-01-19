import React, { Component, PropTypes } from 'react';
import { FormControl } from 'react-bootstrap';

const CoreTextBox = ({textValue, textName, placeholder, changeText}) => {
    function handleTextChange(e) {
        changeText(e.target.value);
    }

    return (
        <FormControl
            name={textName}
            type="text"
            value={textValue}
            placeholder={placeholder}
            onChange={handleTextChange}
            />
    );
};

CoreTextBox.propTypes = {
    textValue : PropTypes.string.isRequired,
    textName : PropTypes.string.isRequired,
    placeholder : PropTypes.string.isRequired,
    changeText : PropTypes.func.isRequired
};

export default CoreTextBox;