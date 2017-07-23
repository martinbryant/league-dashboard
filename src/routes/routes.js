import React from 'react';

import LeagueTables from '../league-tables/league-tables';
import ManageLeague from '../manage-league/manage-league';
import WithLoading from '../shared/with-loading';
import Redirect from '../shared/redirect';

const LeagueTablesWithLoading = WithLoading(LeagueTables);
const ManageLeagueWithLoading = WithLoading(ManageLeague);

const routes = [
    {
        path: '/',
        load: () => Promise.resolve(Redirect)
    },
    {
        path: '/table',
        load: () => Promise.resolve(LeagueTablesWithLoading),
        children: [
            {
                path: '/:leagueId',
                load: () => Promise.resolve(LeagueTables)
            },
        ]
    },
    {
        path: '/league',
        load: () => Promise.resolve(ManageLeagueWithLoading),
        children: [
            {
                path: '/:leagueId',
                load: () => Promise.resolve(ManageLeagueWithLoading)
            },
        ]
    },
    {
        path: '*',
        load : () => Promise.resolve(() => (<div>Not Found</div>))
    }
];

export default routes;