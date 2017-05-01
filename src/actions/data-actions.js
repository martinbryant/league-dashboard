import {
    LOAD_ALL_LEAGUES_SUCCESS,
    EDIT_LEAGUE_NAME_SUCCESS,
    ADD_LEAGUE_SUCCESS,
    DELETE_LEAGUE_SUCCESS,
    ADD_TEAM_SUCCESS,
    EDIT_TEAM_NAME_SUCCESS,
    DELETE_TEAM_SUCCESS
} from '../constants';

export const loadAllLeaguesSuccess = leagues => ({
    type: LOAD_ALL_LEAGUES_SUCCESS,
    leagues
});

export const editLeagueNameSuccess = leagueName => ({
    type: EDIT_LEAGUE_NAME_SUCCESS,
    leagueName
});

export const addLeagueSuccess = league => ({
    type: ADD_LEAGUE_SUCCESS,
    league
});

export const deleteLeagueSuccess = _id => ({
    type: DELETE_LEAGUE_SUCCESS,
    _id
});

export const addTeamSuccess = (_id, team) => ({
    type: ADD_TEAM_SUCCESS,
    _id,
    team
});

export const editTeamNameSuccess = team => ({
    type: EDIT_TEAM_NAME_SUCCESS,
    team
});

export const deleteTeamSuccess = _id => ({
    type: DELETE_TEAM_SUCCESS,
    _id
});