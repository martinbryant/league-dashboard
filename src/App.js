import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import HomePage from './home-page/home-page';
import ManageLeague from './manage-league/manage-league';

const App  = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/league/:leagueId" component={ManageLeague} />
        </Switch>
    );
};

export default App;
