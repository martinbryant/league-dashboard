import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomePage from './home-page/home-page';
import App from './App';
import Layout from './components/Layout';
import ManageLeague from './components/ManageLeague';
import AddLeague from './components/AddLeague';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="add-league" component={AddLeague} />
        <Route path="manage-league/:id" component={ManageLeague} />
    </Route>
);