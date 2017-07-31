import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonToolbar } from 'react-bootstrap';
import FormField from '../shared/form-field';
import SubmitButton from '../shared/submit-button';
import ResetButton from '../shared/reset-button';


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
                <form onSubmit={processLogin} onReset={clearFields}>
                    <FormField
                        autoFocus
                        tabIndex="1"
                        id="userName"
                        onChange={onTextChange}
                        type="text"
                        validationState={userNameValidation}
                        value={userName}
                        label="UserName"
                        validationMessage={errorMessage} />
                    <FormField
                        tabIndex="2"
                        id="password"
                        onChange={onTextChange}
                        type="password"
                        validationState={passwordValidation}
                        value={password}
                        label="Password"
                        validationMessage={errorMessage} />
                    <ButtonToolbar>
                        <SubmitButton
                            tabIndex="3"
                            label={(loading) ? 'Logging in' : 'Submit'}
                            disabled={isSubmitDisabled(userNameValidation, passwordValidation)} />
                        <ResetButton
                            tabIndex="4"
                            label="Reset"
                            disabled={false} />
                    </ButtonToolbar>
                </form>
            </div>);
    }
}

LoginFormComponent.propTypes = {
    processLogin: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
};

export default LoginFormComponent;