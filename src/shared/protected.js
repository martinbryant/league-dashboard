import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Redirect from './redirect';
/* eslint-disable */
const Protected = (Component) => ({ userName }) =>
    (userName)
        ? <Component />
        : <Redirect path="/login" />;

Protected.propTypes = {
    userName: PropTypes.string.isRequired
}
/* eslint-enable */

const mapStateToProps = state => ({
    userName: state.login.userName
});

export default (Component) => connect(mapStateToProps)(Protected(Component));