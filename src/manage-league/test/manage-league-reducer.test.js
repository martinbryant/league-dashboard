import expect from 'expect';

import manageLeague from '../manage-league-reducer';

describe('manage league reducer', () => {
    it('should return the initial state', () => {
        const defaultState = {
            leagueName: '',
            _id: '',
            teams: []
        };
        expect(manageLeague(undefined, {})).toEqual(defaultState);
    });
    it('should handle EDIT_LEAGUE_NAME_SUCCESS', () => {
        const oldState = {
            leagueName: 'Old Team'
        };
        const mockAction = {
            type: 'EDIT_LEAGUE_NAME_SUCCESS',
            leagueName: 'New Team'
        };
        const newState = {
            leagueName: 'New Team'
        };
        expect(manageLeague(oldState, mockAction)).toInclude(newState);
    });
    it('should handle ADD_TEAM_SUCCESS', () => {
        const newTeam = {
            "_id": "5780bc7437edaabd6f6b8b39",
            "teamName": "West Ham",
            "__v": 0,
            "points": 0,
            "shotsDifference": 0,
            "shotsAgainst": 0,
            "shotsFor": 0,
            "lost": 0,
            "drawn": 0,
            "won": 0,
            "played": 0
        };
        const mockAction = {
            type: 'ADD_TEAM_SUCCESS',
            team: newTeam
        };
        const newState = {
            teams : [newTeam]
        };
        expect(manageLeague(undefined, mockAction)).toInclude(newState);
    });
    
});