import expect from 'expect';

import * as selector from '../home-page-selectors';

describe('home page selectors', () => {
    it('should handle findTeamsForSelectedLeague with data', () => {
        const mockLeague = [{
            _id: 'LeagueId1',
            teams: [{
                teamName: 'Team1',
                _id: 'TeamId1'
            },
            {
                teamName: 'Team2',
                _id: 'TeamId2'
            }]
        }];
        const result = [{
            teamName: 'Team1',
            _id: 'TeamId1'
        },
        {
            teamName: 'Team2',
            _id: 'TeamId2'
        }];
        expect(selector.findTeamsForSelectedLeague(mockLeague, 'LeagueId1')).toEqual(result);
    });
    it('should handle findTeamsForSelectedLeague with no leagues', () => {
        const mockLeague = [];
        const result = [];
        expect(selector.findTeamsForSelectedLeague(mockLeague, '')).toEqual(result);
    });
    it('should handle findTeamsForSelectedLeague with no teams', () => {
        const mockLeague = [
            {
                _id: 'LeagueId1',
                leagueName: 'League1',
                teams: []
            }
        ];
        const result = [];
        expect(selector.findTeamsForSelectedLeague(mockLeague, 'LeagueId1')).toEqual(result);
    });
    it('should handle findFixturesForSelectedLeague with data', () => {
        const mockLeague = [{
            _id: 'LeagueId1',
            fixtures: [{
                played: true,
                _id: 'FixtureId1'
            },
            {
                played: false,
                _id: 'FixtureId2'
            }]
        }];
        const result = [
            {
                played: false,
                _id: 'FixtureId2'
            }];
        expect(selector.findFixturesForSelectedLeague(mockLeague, 'LeagueId1')).toEqual(result);
    });
    it('should handle findFixturesForSelectedLeague with no leagues', () => {
        const mockLeague = [];
        const result = [];
        expect(selector.findFixturesForSelectedLeague(mockLeague, '')).toEqual(result);
    });
    it('should handle findFixturesForSelectedLeague with no fixtures', () => {
        const mockLeague = [{
            _id: 'LeagueId1',
            fixtures: []
        }];
        const result = [];
        expect(selector.findFixturesForSelectedLeague(mockLeague, 'LeagueId1')).toEqual(result);
    });
    it('should handle findFixturesForSelectedLeague with fixtures but no unplayed', () => {
        const mockLeague = [{
            _id: 'LeagueId1',
            fixtures: [{
                played: true,
                _id: 'FixtureId1'
            },
            {
                played: true,
                _id: 'FixtureId2'
            }]
        }];
        const result = [];
        expect(selector.findFixturesForSelectedLeague(mockLeague, 'LeagueId1')).toEqual(result);
    });
    it('should handle findResultsForSelectedLeague with data', () => {
        const mockLeague = [{
            _id: 'LeagueId1',
            fixtures: [{
                played: true,
                _id: 'FixtureId1'
            },
            {
                played: false,
                _id: 'FixtureId2'
            }]
        }];
        const result = [
            {
                played: true,
                _id: 'FixtureId1'
            }];
        expect(selector.findResultsForSelectedLeague(mockLeague, 'LeagueId1')).toEqual(result);
    });
    it('should handle findResultsForSelectedLeague with no leagues', () => {
        const mockLeague = [];
        const result = [];
        expect(selector.findResultsForSelectedLeague(mockLeague, '')).toEqual(result);
    });
    it('should handle findResultsForSelectedLeague with no fixtures', () => {
        const mockLeague = [{
            _id: 'LeagueId1',
            fixtures: []
        }];
        const result = [];
        expect(selector.findResultsForSelectedLeague(mockLeague, 'LeagueId1')).toEqual(result);
    });
    it('should handle findResultsForSelectedLeague with fixtures but no results', () => {
        const mockLeague = [{
            _id: 'LeagueId1',
            fixtures: [{
                played: false,
                _id: 'FixtureId1'
            },
            {
                played: false,
                _id: 'FixtureId2'
            }]
        }];
        const result = [];
        expect(selector.findResultsForSelectedLeague(mockLeague, 'LeagueId1')).toEqual(result);
    });
    // it('should handle sortTable with default sort order', () => {
    //     const mockTeams = [
    //         {
    //             "_id": "5776ce4e8c1880374cddd32a",
    //             "teamName": "Man U",
    //             "__v": 0,
    //             "points": 5,
    //             "shotsDifference": 200,
    //             "shotsAgainst": 121,
    //             "shotsFor": 321,
    //             "lost": 0,
    //             "drawn": 2,
    //             "won": 1,
    //             "played": 3
    //         },
    //         {
    //             "_id": "5776ce4e8c1880374cddd32b",
    //             "teamName": "Chelsea",
    //             "__v": 0,
    //             "points": 3,
    //             "shotsDifference": 2,
    //             "shotsAgainst": 1,
    //             "shotsFor": 3,
    //             "lost": 0,
    //             "drawn": 0,
    //             "won": 1,
    //             "played": 1
    //         }
    //     ];
    //     const result = [];
    //     expect(selector.sortTable(mockTeams, 'default', 'desc')).toEqual(result);
    // });
});