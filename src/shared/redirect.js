import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'redux-json-router';

class Redirect extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch, path } = this.props;
        dispatch(push(path));
    }

    render() {
        return null;
    }
}

Redirect.propTypes = {
    path: PropTypes.string,
    dispatch: PropTypes.func.isRequired
};

export default connect(null)(Redirect);