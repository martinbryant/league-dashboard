import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const SubmitButton = ({ label, disabled, ...props }) => (
    <Button
        type="submit"
        bsStyle="success"
        disabled={disabled}
        {...props}>
        {label}
    </Button>
);

SubmitButton.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
    ]),
    disabled: PropTypes.bool.isRequired
};

export default SubmitButton;