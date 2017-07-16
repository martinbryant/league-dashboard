import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory, startListener, Router } from 'redux-json-router';

import configureStore from './store/configureStore';
import routes from './routes/routes';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

import leaguesJson from './leaguesJson';
import tableColumns from './league-tables/table-columns';
import Layout from './layout';

const initialState = {
    ui: {
        tableColumns: tableColumns
    }
};

const history = createBrowserHistory();
const store = configureStore(history, initialState);
startListener(history, store);

const app = document.getElementById('app');

render(
    <Provider store={store}>
        <Layout>
            <Router routes={routes} />
        </Layout>
    </Provider>, app
);