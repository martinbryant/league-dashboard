import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, FormControl, ControlLabel, ButtonGroup, Button, HelpBlock } from 'react-bootstrap';

class LoginFormComponent extends Component {
    constructor(props) {
        super(props);
        this.onTextChange = this.onTextChange.bind(this);
        this.clearFields = this.clearFields.bind(this);
        this.validateUserName = this.validateUserName.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.isSubmitDisabled = this.isSubmitDisabled.bind(this);
        this.initialState = {
            userName: '',
            password: '',
            userNameValidation: 'error',
            passwordValidation: 'error',
            errorMessage: 'Enter a UserName and password'
        };
        this.state = this.initialState;
    }

    isSubmitDisabled(userNameValidation, passwordValidation) {
        return (userNameValidation === 'error' || passwordValidation === 'error');
    }

    validateUserName(text) {
        return (text.length < 3)
            ? {
                userNameValidation: 'error',
                errorMessage: 'User Id must be longer'
            }
            : {
                userNameValidation: 'success',
                errorMessage: ''
            };
    }

    validatePassword(text) {
        return (text.length < 5)
            ? {
                passwordValidation: 'error',
                errorMessage: 'Password must be longer'
            }
            : {
                passwordValidation: 'success',
                errorMessage: ''
            };
    }

    validateField(field, text) {
        const { validateUserName, validatePassword } = this;
        switch (field) {
            case 'userName':
                this.setState(validateUserName(text));
                break;
            case 'password':
                this.setState(validatePassword(text));
                break;
        }
    }

    clearFields() {
        this.setState(this.initialState);
    }

    onTextChange(e) {
        const { id, value } = e.target;
        this.setState({ [id]: value });
        this.validateField(id, value);
    }

    render() {
        const { onTextChange, clearFields, isSubmitDisabled } = this;
        const { userName, password, userNameValidation, passwordValidation, errorMessage } = this.state;
        const { processLogin, loading } = this.props;
        return (
            <div>
                <Form onSubmit={processLogin} onReset={clearFields}>
                    <FormGroup validationState={userNameValidation}>
                        <ControlLabel>UserName</ControlLabel>
                        <FormControl autoFocus type="text" id="userName" value={userName} onChange={onTextChange} />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup validationState={passwordValidation}>
                        <ControlLabel>Password</ControlLabel>
                        <FormControl type="password" id="password" value={password} onChange={onTextChange} />
                        <FormControl.Feedback />
                    </FormGroup>
                    {'  '}
                    <Button type="submit"
                        bsStyle="success"
                        disabled={isSubmitDisabled(userNameValidation, passwordValidation)}>
                        {(loading) ? 'Logging in' : 'Submit'}</Button>
                    {'  '}
                    <Button type="reset" bsStyle="danger">Reset</Button>
                    {' '}
                    {(errorMessage)
                        && <HelpBlock style={{ display: 'inline', color: 'red' }}>{errorMessage}</HelpBlock>}
                </Form>
            </div>);
    }
}

LoginFormComponent.propTypes = {
    processLogin: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};

export default LoginFormComponent;