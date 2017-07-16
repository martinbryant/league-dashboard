import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'redux-json-router';

class Redirect extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch, redirectPath } = this.props;
        dispatch(push(redirectPath));
    }

    render() {
        return null;
    }
}

Redirect.propTypes = {
    redirectPath: PropTypes.string,
    dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    const { pathname } = state.router;
    switch (pathname) {
        case ('/'):
            return {
                redirectPath: '/table'
            };
    }
};

export default connect(mapStateToProps)(Redirect);