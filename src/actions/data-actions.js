import {
    LOAD_ALL_LEAGUES_SUCCESS,
    EDIT_LEAGUE_NAME_SUCCESS,
    ADD_LEAGUE_SUCCESS,
    DELETE_LEAGUE_SUCCESS,
    ADD_TEAM_SUCCESS,
    EDIT_TEAM_NAME_SUCCESS,
    DELETE_TEAM_SUCCESS
} from '../constants';

import leaguesApi from '../leaguesApi';

export const loadAllLeaguesSuccess = leagues => ({
    type: LOAD_ALL_LEAGUES_SUCCESS,
    leagues
});

export const editLeagueNameSuccess = (_id, leagueName) => ({
    type: EDIT_LEAGUE_NAME_SUCCESS,
    _id,
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

export const addTeamSuccess = (leagueId, team) => {
    return ({
        type: ADD_TEAM_SUCCESS,
        leagueId,
        team
    });
};

export const editTeamNameSuccess = (_id, teamName) => ({
    type: EDIT_TEAM_NAME_SUCCESS,
    _id,
    teamName
});

export const deleteTeamSuccess = _id => ({
    type: DELETE_TEAM_SUCCESS,
    _id
});

export function loadLeagues() {
    return function (dispatch) {
        return leaguesApi.getAllLeagues()
            .then(leagues => {
                dispatch(loadAllLeaguesSuccess(leagues));
            })
            .catch(error => {
                throw (error);
            });
    };
}

export function addTeam(leagueId, teamName) {
    return function (dispatch) {
        return leaguesApi.addNewTeam(teamName)
            .then(team => {
                dispatch(addTeamSuccess(leagueId, team));
            })
            .catch(error => {
                throw (error);
            });
    };
}

export function editTeam(teamId, teamName) {
    return function (dispatch) {
        return leaguesApi.editTeamName(teamId, teamName)
            .then(team => {
                dispatch(editTeamNameSuccess(team._id, team.teamName));
            })
            .catch(error => {
                throw (error);
            });
    };
}

export function deleteTeam(teamId) {
    return function (dispatch) {
        return leaguesApi.deleteTeam(teamId)
            .then(team => {
                dispatch(deleteTeamSuccess(team));
            })
            .catch(error => {
                throw (error);
            });
    };
}

