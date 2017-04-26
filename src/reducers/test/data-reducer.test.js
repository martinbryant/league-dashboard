import expect from 'expect';

import data from '../data-reducer';
import {
    CHANGE_SELECTED_LEAGUE,
    EDIT_LEAGUE_NAME_SUCCESS,
    ADD_LEAGUE_SUCCESS,
    DELETE_LEAGUE_SUCCESS,
    ADD_TEAM_SUCCESS,
    EDIT_TEAM_NAME_SUCCESS,
    DELETE_TEAM_SUCCESS
} from '../../constants';

describe('data reducer tests', () => {
    it('should return the initial state', () => {
        const defaultState = {
            leagues: [],
            selectedLeague: ''
        };
        expect(data(undefined, {})).toEqual(defaultState);
    });
    it('should handle CHANGE_SELECTED_LEAGUE', () => {
        const mockAction = {
            type: CHANGE_SELECTED_LEAGUE,
            _id: 'id'
        };
        const newState = {
            selectedLeague: 'id'
        };
        expect(data(undefined, mockAction)).toInclude(newState);
    });
    it('should handle EDIT_LEAGUE_NAME_SUCCESS', () => {
        const oldState = {
            leagues: [{
                _id: 'LeagueId',
                leagueName: 'Old League'
            }],
            selectedLeague: ''
        };
        const mockAction = {
            type: EDIT_LEAGUE_NAME_SUCCESS,
            leagueId: 'LeagueId',
            leagueName: 'New League'
        };
        const newState = {
            leagues: [{
                _id: 'LeagueId',
                leagueName: 'New League'
            }]
        };
        expect(data(oldState, mockAction)).toInclude(newState);
    });
    it('should handle ADD_LEAGUE_SUCCESS', () => {
        const oldState = {
            leagues: [],
            selectedLeague: ''
        };
        const mockAction = {
            type: ADD_LEAGUE_SUCCESS,
            league: {
                leagueName: 'New League'
            }
        };
        const newState = {
            leagues: [{
                leagueName: 'New League'
            }]
        };
        expect(data(oldState, mockAction)).toInclude(newState);
    });
    it('should handle DELETE_LEAGUE_SUCCESS', () => {
        const oldState = {
            leagues: [{
                _id: 'LeagueId',
                leagueName: 'League 1'
            }],
            selectedLeague: ''
        };
        const mockAction = {
            type: DELETE_LEAGUE_SUCCESS,
            _id: 'LeagueId'
        };
        const newState = {
            leagues: []
        };
        expect(data(oldState, mockAction)).toInclude(newState);
    });
    it('should handle ADD_NEW_TEAM_SUCCESS', () => {
        const oldState = {
            leagues: [{
                _id: 'LeagueId',
                leagueName: 'League 1',
                teams: [{
                    teamName: 'Team 1',
                    _id: 'Id1'
                }]
            }],
            selectedLeague: ''
        };
        const mockAction = {
            type: ADD_TEAM_SUCCESS,
            leagueId: 'LeagueId',
            team: {
                teamName: 'New Team',
                _id: 'Id2'
            }
        };
        const newState = {
            leagues: [{
                _id: 'LeagueId',
                leagueName: 'League 1',
                teams: [{
                    teamName: 'Team 1',
                    _id: 'Id1'
                },
                {
                    teamName: 'New Team',
                    _id: 'Id2'
                }]
            }],
            selectedLeague: ''
        };
        expect(data(oldState, mockAction)).toEqual(newState);
    });
    it('should handle EDIT_TEAM_NAME_SUCCESS', () => {
        const oldState = {
            leagues: [{
                _id: 'LeagueId',
                leagueName: 'League 1',
                teams: [{
                    teamName: 'Team 1',
                    _id: 'Id1'
                }]
            }],
            selectedLeague: ''
        };
        const mockAction = {
            type: EDIT_TEAM_NAME_SUCCESS,
            leagueId: 'LeagueId',
            team: {
                teamName: 'Amended Team',
                _id: 'Id1'
            }
        };
        const newState = {
            leagues: [{
                _id: 'LeagueId',
                leagueName: 'League 1',
                teams: [{
                    teamName: 'Amended Team',
                    _id: 'Id1'
                }]
            }],
            selectedLeague: ''
        };
        expect(data(oldState, mockAction)).toEqual(newState);
    });
    it('should handle DELETE_TEAM_SUCCESS', () => {
        const oldState = {
            leagues: [{
                _id: 'LeagueId',
                leagueName: 'League 1',
                teams: [{
                    teamName: 'Team 1',
                    _id: 'Id1'
                },
                {
                    teamName: 'Team 2',
                    _id: 'Id2'
                }]
            }],
            selectedLeague: ''
        };
        const mockAction = {
            type: DELETE_TEAM_SUCCESS,
            leagueId: 'LeagueId',
            teamId: 'Id2'
        };
        const newState = {
            leagues: [{
                _id: 'LeagueId',
                leagueName: 'League 1',
                teams: [{
                    teamName: 'Team 1',
                    _id: 'Id1'
                }]
            }],
            selectedLeague: ''
        };
        expect(data(oldState, mockAction)).toEqual(newState);
    });
});