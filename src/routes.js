import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Layout from './components/Layout';
import ManageLeague from './components/ManageLeague';
import AddLeague from './components/AddLeague';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Layout} />
        <Route path="add-league" component={AddLeague} />
        <Route path="manage-league/:id" component={ManageLeague} />
    </Route>
);