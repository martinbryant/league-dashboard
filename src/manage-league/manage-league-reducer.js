import { combineReducers } from 'redux';

const leagueName = (state = '', action) => {
    if (action.type == 'EDIT_LEAGUE_NAME_SUCCESS') {
        return action.leagueName;
    } else {
        return state;
    }
};

const _id = (state = '', action) => state;

const teams = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TEAM_SUCCESS':
            return [...state, action.team];
        default: return state;
    }
};

const manageLeague = combineReducers({
    leagueName,
    _id,
    teams
});

export default manageLeague;