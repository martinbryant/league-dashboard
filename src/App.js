import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './home-page/home-page';
import ManageLeague from './manage-league/manage-league';
import { loadLeagues } from './actions/data-actions';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch, leagues } = this.props;
        (leagues.length < 1) && dispatch(loadLeagues());
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/league/:leagueId" component={ManageLeague} />
            </Switch>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    leagues: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    const { leagues } = state.data;
    return {
        leagues
    };
};

export default withRouter(connect(mapStateToProps)(App));
