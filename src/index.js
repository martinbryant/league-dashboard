import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
import configureStore from './store/configureStore';
import { loadLeagues } from './actions/leagueActions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import leaguesJson from './leaguesJson';
import tableColumns from './home-page/table-columns';

const initialState = {
    data: {
        leagues: leaguesJson,
        selectedLeague: leaguesJson[0]._id
    },
    ui: {
        tableColumns: tableColumns
    }
};

const app = document.getElementById('app');
const store = configureStore(initialState);

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>, app
);