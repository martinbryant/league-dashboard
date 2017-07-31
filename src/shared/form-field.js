import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';

const FormField = ({ id, onChange, type, validationState, value = '', label, validationMessage, ...props }) => (
    <FormGroup controlId={id} validationState={validationState}>
        {label && <ControlLabel>{label}</ControlLabel>}
        <FormControl type={type} value={value} onChange={onChange} {...props} />
        <FormControl.Feedback />
        <HelpBlock style={{ color: 'red' }}>{validationMessage}</HelpBlock>
    </FormGroup>
);

FormField.propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['text', 'password']),
    validationState: PropTypes.oneOf(['success', 'error', 'warning']),
    value: PropTypes.string,
    label: PropTypes.string,
    validationMessage: PropTypes.string
};

export default FormField;