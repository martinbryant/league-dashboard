import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, FormControl, HelpBlock, Button, ButtonToolbar, Glyphicon } from 'react-bootstrap';

class EditForm extends Component {
    constructor(props) {
        super(props);
        const { defaultText } = props;
        this.onTextChange = this.onTextChange.bind(this);
        this.state = {
            textField: defaultText,
            isSubmitDisabled: true,
            validationState: 'error',
            errorMessage: (defaultText.length > 2)
                ? 'Name already exists'
                : 'Name must be longer'
        };
    }

    validateTextField(text) {
        const { isNameUnique } = this.props;
        return (isNameUnique(text) && text.length > 2)
            ? this.setState({
                isSubmitDisabled: false,
                validationState: 'success'
            })
            : this.setState({
                isSubmitDisabled: true,
                validationState: 'error',
                errorMessage: (text.length > 2)
                    ? 'Name already exists'
                    : 'Name must be longer'
            });
    }

    onTextChange(e) {
        const { isNameUnique } = this.props;
        const text = e.target.value;
        this.setState({ textField: text });
        this.validateTextField(text);
    }

    render() {
        const { onTextChange, validateField } = this;
        const { id, defaultText, saveTextFieldData, resetEditMode } = this.props;
        const { textField, isSubmitDisabled, validationState, errorMessage } = this.state;
        return (
            <div>
                <Form inline onSubmit={saveTextFieldData} onReset={resetEditMode}>
                    <FormGroup validationState={validationState}>
                        <FormControl autoFocus type="text" id={id} value={textField} onChange={onTextChange} />
                        <FormControl.Feedback />
                    </FormGroup>
                    {'  '}
                    <Button type="submit" bsStyle="success" disabled={isSubmitDisabled}><Glyphicon glyph="ok" /></Button>
                    {'  '}
                    <Button type="reset" bsStyle="danger"><Glyphicon glyph="remove" /></Button>
                    {' '}
                    {(isSubmitDisabled)
                        && <HelpBlock style={{ display: 'inline', color: 'red' }}>{errorMessage}</HelpBlock>}
                </Form>
            </div>
        );
    }

}

EditForm.propTypes = {
    id: PropTypes.string.isRequired,
    defaultText: PropTypes.string.isRequired,
    saveTextFieldData: PropTypes.func.isRequired,
    resetEditMode: PropTypes.func.isRequired,
    isNameUnique: PropTypes.func.isRequired
};

export default EditForm;

