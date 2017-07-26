import React from 'react';

import HomePage from '../home-page/home-page';
import LoginPage from '../login-page/login-page';
import EnhancedLeagueTables from '../league-tables/enhanced-league-tables';
import EnhancedManageLeague from '../manage-league/enhanced-manage-league';

const routes = [
    {
        path: '/',
        load: () => Promise.resolve(HomePage)
    },
    {
        path: '/login',
        load: () => Promise.resolve(LoginPage)
    },
    {
        path: '/table',
        load: () => Promise.resolve(EnhancedLeagueTables),
        children: [
            {
                path: '/:leagueId',
                load: () => Promise.resolve(EnhancedLeagueTables)
            },
        ]
    },
    {
        path: '/league',
        load: () => Promise.resolve(EnhancedManageLeague),
        children: [
            {
                path: '/:leagueId',
                load: () => Promise.resolve(EnhancedManageLeague)
            },
        ]
    },
    {
        path: '*',
        load: () => Promise.resolve(() => (<div>Not Found</div>))
    }
];

export default routes;