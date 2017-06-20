import React from 'react';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './routes';
import configureStore from './store/configureStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import leaguesJson from './leaguesJson';
import tableColumns from './home-page/table-columns';
import HomePage from './home-page/home-page';
import ManageLeague from './manage-league/manage-league';
import { loadLeagues } from './actions/data-actions';

const initialState = {
    ui: {
        tableColumns: tableColumns
    }
};

const app = document.getElementById('app');
const store = configureStore(initialState);

store.dispatch(loadLeagues(leaguesJson));

render(
    <Provider store={store}>
            <Router>
                <Route exact path="/" component={ManageLeague} />
            </Router>
    </Provider>, app
);