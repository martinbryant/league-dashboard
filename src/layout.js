import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LoginBar from './login-bar/login-bar';
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
            <div>
                <LoginBar />
                {this.props.children}
            </div>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    dispatch: PropTypes.func.isRequired,
    hasLeagues: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
    const { leagues } = state.data;
    return {
        hasLeagues: leagues.length > 1
    };
};

export default connect(mapStateToProps)(Layout);