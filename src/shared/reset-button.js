import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const ResetButton = ({ label, disabled, ...props }) => (
    <Button
        type="reset"
        bsStyle="danger"
        disabled={disabled}
        {...props}>
        {label}
    </Button>
);

ResetButton.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
    ]),
    disabled: PropTypes.bool.isRequired
};

export default ResetButton;