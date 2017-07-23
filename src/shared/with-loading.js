import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoadingSpinner from './loading-spinner';
/* eslint-disable */
const WithLoading = Component => ({ loading }) =>
    (loading)
        ? <LoadingSpinner />
        : <Component />;

WithLoading.propTypes = {
    loading: PropTypes.bool.isRequired
};
/* eslint-enable */
const mapStateToProps = state => {
    const { loading } = state.ui;
    return {
        loading
    };
};

export default (Component) => connect(mapStateToProps)(WithLoading(Component));