import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoadingSpinner from './shared-components/loading-spinner';
import { loadLeagues } from './actions/data-actions';

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch, hasLeagues } = this.props;
        (!hasLeagues) && dispatch(loadLeagues());
    }

    render() {
        return (
            this.props.children
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    loading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    hasLeagues : PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    const { loading } = state.ui;
    const { leagues } = state.data;
    return {
        loading,
        hasLeagues: leagues.length > 1
    };
};

export default connect(mapStateToProps)(Layout);