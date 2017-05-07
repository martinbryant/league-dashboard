import { combineReducers } from 'redux';

import {
    LOAD_ALL_LEAGUES_SUCCESS,
    EDIT_LEAGUE_NAME_SUCCESS,
    ADD_LEAGUE_SUCCESS,
    DELETE_LEAGUE_SUCCESS,
    CHANGE_SELECTED_LEAGUE,
    ADD_TEAM_SUCCESS,
    EDIT_TEAM_NAME_SUCCESS,
    DELETE_TEAM_SUCCESS
} from '../constants';

const leagues = (state = [], action) => {
    switch (action.type) {
        case LOAD_ALL_LEAGUES_SUCCESS:
            return action.leagues.map(league => {
                return {
                    ...league,
                    teams: league.teams.map(team => team._id),
                    fixtures: league.fixtures.map(fixture => fixture._id)
                };
            });
        case EDIT_LEAGUE_NAME_SUCCESS:
            return state.map(league => (league._id === action._id)
                ? {
                    ...league,
                    leagueName: action.leagueName
                }
                : league);
        case ADD_LEAGUE_SUCCESS:
            return [...state,
            action.league
            ];
        case ADD_TEAM_SUCCESS:
            return state.map(league => (league._id === action._id)
                ? {
                    ...league,
                    teams: [
                        ...league.teams,
                        action.team._id
                    ]
                }
                : league);
        case DELETE_LEAGUE_SUCCESS:
            return state.filter(league => league._id !== action._id);
        case DELETE_TEAM_SUCCESS:
            return state.map(league => {
                return {
                    ...league,
                    teams: league.teams.filter(team => team !== action._id)
                };
            });
        default: return state;
    }
};

const teams = (state = [], action) => {
    switch (action.type) {
        case LOAD_ALL_LEAGUES_SUCCESS:
            return extractField(action, 'teams');
        case ADD_TEAM_SUCCESS:
            return [...state,
            action.team
            ];
        case EDIT_TEAM_NAME_SUCCESS:
            return state.map(team => (team._id === action._id)
                ? {
                    ...team,
                    teamName: action.teamName
                }
                : team);
        case DELETE_TEAM_SUCCESS:
            return state.filter(team => team._id !== action._id);
        default: return state;
    }
};

const fixtures = (state = [], action) => {
    switch (action.type) {
        case LOAD_ALL_LEAGUES_SUCCESS:
            return extractField(action, 'fixtures');
        default: return state;
    }
};

const selectedLeague = (state = '', action) => (action.type === CHANGE_SELECTED_LEAGUE)
    ? action._id
    : state;

const data = combineReducers({
    leagues,
    teams,
    fixtures,
    selectedLeague
});

export default data;

// const extractField = (action, field) => {
//     let array = [];
//     action.leagues.forEach(league => {
//         array = array.concat(league[field]);
//     });
//     return array;
// };

const extractField = (action, field) => {
    return action.leagues.map(league => league[field])
        .reduce((a, b) => a.concat(b));
};