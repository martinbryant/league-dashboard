import expect from 'expect';

import * as selector from '../data-selectors';

describe('data selectors', () => {
    it('should handle findTeamsForSelectedLeague with data', () => {
        const mockLeague = [{
            _id: 'LeagueId1',
            teams: [
                'TeamId1',
                'TeamId2']
        }];
        const mockTeams = [
            {
                teamName: 'Team1',
                _id: 'TeamId1'
            },
            {
                teamName: 'Team2',
                _id: 'TeamId2'
            },
            {
                teamName: 'Team3',
                _id: 'TeamId3'
            },
            {
                teamName: 'Team4',
                _id: 'TeamId4'
            }
        ];
        const result = [{
            teamName: 'Team1',
            _id: 'TeamId1'
        },
        {
            teamName: 'Team2',
            _id: 'TeamId2'
        }];
        expect(selector.findTeamsForSelectedLeague(mockLeague, mockTeams, 'LeagueId1')).toEqual(result);
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
            fixtures: [
                'FixtureId1'
                ,
                'FixtureId2'
            ]
        }];
        const mockFixtures = [{
            played: true,
            _id: 'FixtureId1'
        },
        {
            played: false,
            _id: 'FixtureId2'
        }];
        const result = [
            {
                played: false,
                _id: 'FixtureId2'
            }];
        expect(selector.findFixturesForSelectedLeague(mockLeague, mockFixtures, 'LeagueId1')).toEqual(result);
    });
    it('should handle findFixturesForSelectedLeague with no leagues', () => {
        const mockLeague = [];
        const mockFixtures = [];
        const result = [];
        expect(selector.findFixturesForSelectedLeague(mockLeague, mockFixtures, '')).toEqual(result);
    });
    it('should handle findFixturesForSelectedLeague with no fixtures', () => {
        const mockLeague = [{
            _id: 'LeagueId1',
            fixtures: []
        }];
        const mockFixtures = [];
        const result = [];
        expect(selector.findFixturesForSelectedLeague(mockLeague, mockFixtures, 'LeagueId1')).toEqual(result);
    });
    it('should handle findFixturesForSelectedLeague with fixtures but no unplayed', () => {
        const mockLeague = [{
            _id: 'LeagueId1',
            fixtures: [
                'FixtureId1'
                ,
                'FixtureId2'
            ]
        }];
        const mockFixtures = [{
            played: true,
            _id: 'FixtureId1'
        },
        {
            played: true,
            _id: 'FixtureId2'
        }];
        const result = [];
        expect(selector.findFixturesForSelectedLeague(mockLeague, mockFixtures, 'LeagueId1')).toEqual(result);
    });
    it('should handle findResultsForSelectedLeague with data', () => {
        const mockLeague = [{
            _id: 'LeagueId1',
            fixtures: [
                'FixtureId1'
                ,
                'FixtureId2'
            ]
        }];
        const mockFixtures = [{
            played: true,
            _id: 'FixtureId1'
        },
        {
            played: false,
            _id: 'FixtureId2'
        }];
        const result = [
            {
                played: true,
                _id: 'FixtureId1'
            }];
        expect(selector.findResultsForSelectedLeague(mockLeague, mockFixtures, 'LeagueId1')).toEqual(result);
    });
    it('should handle findResultsForSelectedLeague with no leagues', () => {
        const mockLeague = [];
        const mockFixtures = [];
        const result = [];
        expect(selector.findResultsForSelectedLeague(mockLeague, mockFixtures, '')).toEqual(result);
    });
    it('should handle findResultsForSelectedLeague with no fixtures', () => {
        const mockLeague = [{
            _id: 'LeagueId1',
            fixtures: []
        }];
        const mockFixtures = [];
        const result = [];
        expect(selector.findResultsForSelectedLeague(mockLeague, mockFixtures, 'LeagueId1')).toEqual(result);
    });
    it('should handle findResultsForSelectedLeague with fixtures but no results', () => {
        const mockLeague = [{
            _id: 'LeagueId1',
            fixtures: [
                'FixtureId1'
                ,
                'FixtureId2'
            ]
        }];
        const mockFixtures = [{
            played: false,
            _id: 'FixtureId1'
        },
        {
            played: false,
            _id: 'FixtureId2'
        }];
        const result = [];
        expect(selector.findResultsForSelectedLeague(mockLeague, mockFixtures, 'LeagueId1')).toEqual(result);
    });
    it('should handle findLeagueNameForSelectedLeague and return leagueName', () => {
        const mockLeague = [{
            _id: 'LeagueId1',
            leagueName: 'League 1',
            fixtures: [{
                played: false,
                _id: 'FixtureId1'
            },
            {
                played: false,
                _id: 'FixtureId2'
            }]
        }];
        const result = 'League 1';
        expect(selector.findLeagueNameForSelectedLeague(mockLeague, 'LeagueId1')).toEqual(result);
    });
    it('should handle findLeagueNameForSelectedLeague and return empty string', () => {
        const mockLeague = [{
            _id: 'LeagueId1',
            leagueName: 'League 1',
            fixtures: [{
                played: false,
                _id: 'FixtureId1'
            },
            {
                played: false,
                _id: 'FixtureId2'
            }]
        }];
        const result = '';
        expect(selector.findLeagueNameForSelectedLeague(mockLeague, 'LeagueId2')).toEqual(result);
    });
    it('should handle findTeamNamesAndIdForSelectedLeague and return names and ids', () => {
        const mockLeague = [{
            _id: 'LeagueId1',
            teams: [
                'TeamId1',
                'TeamId2']
        }];
        const mockTeams = [{
            teamName: 'Team1',
            _id: 'TeamId1',
            points: 0
        },
        {
            teamName: 'Team2',
            _id: 'TeamId2',
            points: 0
        }];
        const result = [{
            teamName: 'Team1',
            _id: 'TeamId1'
        },
        {
            teamName: 'Team2',
            _id: 'TeamId2'
        }];
        expect(selector.findTeamNamesAndIdForSelectedLeague(mockLeague, mockTeams, 'LeagueId1')).toEqual(result);
    });
    it('should handle findTeamNamesAndIdForSelectedLeague and return empty array', () => {
        const mockLeague = [{
            _id: 'LeagueId1',
            teams: [{
                teamName: 'Team1',
                _id: 'TeamId1',
                points: 0
            },
            {
                teamName: 'Team2',
                _id: 'TeamId2',
                points: 0
            }]
        }];
        const result = [];
        expect(selector.findTeamNamesAndIdForSelectedLeague(mockLeague, 'LeagueId2')).toEqual(result);
    });
    it('should handle checkNameIsUnique and return false if the teamName exists', () => {
        const mockTeams = [
            {
                teamName: 'Team1',
                _id: 'TeamId1'
            },
            {
                teamName: 'Team2',
                _id: 'TeamId2'
            },
            {
                teamName: 'Team3',
                _id: 'TeamId3'
            },
            {
                teamName: 'Team4',
                _id: 'TeamId4'
            }
        ];
        const result = false;
        expect(selector.checkNameIsUnique(mockTeams, 'Team1', 'teamName')).toEqual(result);
    });
    it('should handle checkNameIsUnique and return true if the teamName does not exist', () => {
        const mockTeams = [
            {
                teamName: 'Team1',
                _id: 'TeamId1'
            },
            {
                teamName: 'Team2',
                _id: 'TeamId2'
            },
            {
                teamName: 'Team3',
                _id: 'TeamId3'
            },
            {
                teamName: 'Team4',
                _id: 'TeamId4'
            }
        ];
        const result = true;
        expect(selector.checkNameIsUnique(mockTeams, 'Team5', 'teamName')).toEqual(result);
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