import expect from 'expect';

import * as actions from '../data-actions';

describe('data actions', () => {
    it('should create an action to load all leagues', () => {
        const mockLeague = [
            {
                leagueName: 'MockLeague'
            }
        ];
        const expectedAction = {
            type: 'LOAD_ALL_LEAGUES_SUCCESS',
            leagues: mockLeague
        };
        expect(actions.loadAllLeaguesSuccess(mockLeague)).toEqual(expectedAction);
    });
    it('should create an action to edit league name', () => {
        const mockId = 'LeagueId';
        const mockLeagueName = 'League 1';
        const expectedAction = {
            type: 'EDIT_LEAGUE_NAME_SUCCESS',
            _id: mockId,
            leagueName: mockLeagueName
        };
        expect(actions.editLeagueNameSuccess(mockId, mockLeagueName)).toEqual(expectedAction);
    });
    it('should create an action to add a league', () => {
        const mockLeague = {
            leagueName: 'New League',
            _id: 'LeagueId'
        };
        const expectedAction = {
            type: 'ADD_LEAGUE_SUCCESS',
            league: mockLeague
        };
        expect(actions.addLeagueSuccess(mockLeague)).toEqual(expectedAction);
    });
    it('should create an action to delete a league', () => {
        const mockId = 'LeagueId';
        const expectedAction = {
            type: 'DELETE_LEAGUE_SUCCESS',
            _id: mockId
        };
        expect(actions.deleteLeagueSuccess(mockId)).toEqual(expectedAction);
    });
    it('should create an action to add a team', () => {
        const mockTeam = {
            teamName: 'New Team',
            _id: 'TeamId'
        };
        const expectedAction = {
            type: 'ADD_TEAM_SUCCESS',
            team: mockTeam
        };
        expect(actions.addTeamSuccess(mockTeam)).toEqual(expectedAction);
    });
    it('should create an action to edit team name', () => {
        const mockId = 'Team Id';
        const mockTeamName = 'New Team';
        const expectedAction = {
            type: 'EDIT_TEAM_NAME_SUCCESS',
            _id: mockId,
            teamName: mockTeamName
        };
        expect(actions.editTeamNameSuccess(mockId, mockTeamName)).toEqual(expectedAction);
    });
    it('should create an action to delete a team', () => {
        const mockId = 'TeamId';
        const expectedAction = {
            type: 'DELETE_TEAM_SUCCESS',
            _id: mockId
        };
        expect(actions.deleteTeamSuccess(mockId)).toEqual(expectedAction);
    });
});