import React from 'react';

import LeagueTables from '../league-tables/league-tables';
import ManageLeague from '../manage-league/manage-league';
import Redirect from '../shared-components/redirect';


const routes = [
    {
        path: '/',
        load: () => Promise.resolve(Redirect)
    },
    {
        path: '/table',
        load: () => Promise.resolve(LeagueTables),
        children: [
            {
                path: '/:leagueId',
                load: () => Promise.resolve(LeagueTables)
            },
        ]
    },
    {
        path: '/league',
        load: () => Promise.resolve(ManageLeague),
        children: [
            {
                path: '/:leagueId',
                load: () => Promise.resolve(ManageLeague)
            },
        ]
    },
    {
        path: '*',
        load : () => Promise.resolve(() => (<div>Not Found</div>))
    }
];

export default routes;