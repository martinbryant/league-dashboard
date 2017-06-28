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

export const loadAllLeaguesStarted = () => ({
    type: 'LOAD_ALL_LEAGUES_STARTED'
});

export const loadAllLeaguesSuccess = leagues => ({
    type: LOAD_ALL_LEAGUES_SUCCESS,
    leagues
});

export const editLeagueNameStarted = () => ({
    type: 'EDIT_LEAGUE_NAME_STARTED'
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

export const deleteLeagueStarted = () => ({
    type: 'DELETE_LEAGUE_STARTED'
});

export const deleteLeagueSuccess = _id => ({
    type: DELETE_LEAGUE_SUCCESS,
    _id
});

export const addTeamStarted = () => ({
    type: 'ADD_TEAM_STARTED'
});

export const addTeamSuccess = (leagueId, team) => ({
    type: ADD_TEAM_SUCCESS,
    leagueId,
    team
});

export const editTeamNameStarted = () => ({
    type: 'EDIT_TEAM_NAME_STARTED'
});

export const editTeamNameSuccess = (_id, teamName) => ({
    type: EDIT_TEAM_NAME_SUCCESS,
    _id,
    teamName
});

export const deleteTeamStarted = () => ({
    type: 'DELETE_TEAM_STARTED'
});

export const deleteTeamSuccess = _id => ({
    type: DELETE_TEAM_SUCCESS,
    _id
});

export function loadLeagues() {
    return function (dispatch) {
        dispatch(loadAllLeaguesStarted());
        return leaguesApi.getAllLeagues()
            .then(leagues => {
                dispatch(loadAllLeaguesSuccess(leagues));
            })
            .catch(error => {
                throw (error);
            });
    };
}

export function editLeagueName(leagueId, leagueName) {
    return function (dispatch) {
        dispatch(editLeagueNameStarted());
        return leaguesApi.editLeagueName(leagueId, leagueName)
            .then(league => {
                dispatch(editLeagueNameSuccess(league._id, league.leagueName));
            })
            .catch(error => {
                throw (error);
            });
    };
}

export function deleteLeague(leagueId) {
    return function (dispatch) {
        dispatch(deleteLeagueStarted());
        return leaguesApi.deleteLeague(leagueId)
            .then(league => {
                dispatch(deleteLeagueSuccess(leagueId));
            })
            .catch(error => {
                throw (error);
            });
    };
}

export function addTeam(leagueId, teamName) {
    return function (dispatch) {
        dispatch(addTeamStarted());
        return leaguesApi.addNewTeam(teamName)
            .then(team => {
                dispatch(addTeamSuccess(leagueId, team));
            })
            .catch(error => {
                throw (error);
            });
    };
}

export function editTeamName(teamId, teamName) {
    return function (dispatch) {
        dispatch(editTeamNameStarted());
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
        dispatch(deleteTeamStarted());
        return leaguesApi.deleteTeam(teamId)
            .then(teamId => {
                dispatch(deleteTeamSuccess(teamId));
            })
            .catch(error => {
                throw (error);
            });
    };
}

export function deleteField(field, id) {
    switch (field) {
        case 'team':
            return deleteTeam(id);
        case 'league':
            return deleteLeague(id);
    }
}

