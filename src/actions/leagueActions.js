import * as apiCalls from './apiCalls';

export function changeLeagueNameSuccess(league) {
    return { type: 'CHANGE_LEAGUE_NAME_SUCCESS', league };
}

export function loadLeaguesSuccess(leagues) {
    return { type: 'LOAD_LEAGUES_SUCCESS', leagues };
}

export function loadLeagues() {
    return function (dispatch) {
        return apiCalls.getLeagues()
            .then(leagues => {
                dispatch(loadLeaguesSuccess(leagues));
            })
            .catch(error => {
                throw (error);
            });
    };
}

export function changeLeagueName(leagueId, newLeagueName) {
    return function (dispatch) {
        return apiCalls.amendLeagueName(leagueId, newLeagueName)
            .then(league => {
                dispatch(changeLeagueNameSuccess(league));
            })
            .catch(error => {
                throw (error);
            });
    };
}