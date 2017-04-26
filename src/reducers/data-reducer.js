import { combineReducers } from 'redux';

import {
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
        case EDIT_LEAGUE_NAME_SUCCESS:
        case ADD_TEAM_SUCCESS:
        case EDIT_TEAM_NAME_SUCCESS:
        case DELETE_TEAM_SUCCESS:
            return findLeagueAndEdit(state, action);
        case ADD_LEAGUE_SUCCESS:
            return [...state,
            action.league
            ];
        case DELETE_LEAGUE_SUCCESS:
            return state.filter(league => league._id !== action._id);
        default: return state;
    }
};

const selectedLeague = (state = '', action) => {
    if (action.type === CHANGE_SELECTED_LEAGUE) {
        return action._id;
    } else {
        return state;
    }
};

const data = combineReducers({
    leagues,
    selectedLeague
});

export default data;

const findLeagueAndEdit = (state, action) => {
    return state.map(league => {
        if (league._id === action.leagueId) {
            switch (action.type) {
                case ADD_TEAM_SUCCESS:
                    return Object.assign({}, league, {
                        teams: [
                            ...league.teams, action.team
                        ]
                    });
                case EDIT_LEAGUE_NAME_SUCCESS:
                    return Object.assign({}, league, {
                        leagueName: action.leagueName
                    });
                case EDIT_TEAM_NAME_SUCCESS:
                    return Object.assign({}, league, {
                        teams: league.teams.map(team => {
                            if (team._id === action.team._id) {
                                return action.team;
                            }
                            return team;
                        })
                    });
                case DELETE_TEAM_SUCCESS:
                    return Object.assign({}, league, {
                        teams: league.teams.filter(team => team._id !== action.teamId)
                    });
                default: return state;
            }
        }
        return league;
    });
};

//Changed this reducer so each reducer handles own slice of state.
//Had to specify leagues and tableColumns above or the initial state
//when creating the store would not initialise the value correctly
//meaning it would ignore both values

// const homePage = (state = {}, action) => {
//     switch (action.type) {
//         case 'CHANGE_SELECTED_LEAGUE':
//             return Object.assign({}, state, {
//                 selectedLeague: action._id,
//                 sortField: 'default'
//             });
//         case 'RE_ORDER_TABLE':
//             return Object.assign({}, state, {
//                 sortField: action.column
//             });

//         default: return state;
//     }
// };


