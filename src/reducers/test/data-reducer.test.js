import expect from 'expect';

import data from '../data-reducer';
import {
    LOAD_ALL_LEAGUES_SUCCESS,
    EDIT_LEAGUE_NAME_SUCCESS,
    ADD_LEAGUE_SUCCESS,
    DELETE_LEAGUE_SUCCESS,
    CHANGE_SELECTED_LEAGUE,
    ADD_TEAM_SUCCESS,
    EDIT_TEAM_NAME_SUCCESS,
    DELETE_TEAM_SUCCESS
} from '../../constants';



describe('data reducer tests', () => {
    const mockOldState = {
        leagues: [
            {
                _id: 'LeagueId1',
                leagueName: 'League1',
                teams: [
                    'TeamId1',
                    'TeamId2'
                ],
                fixtures: [
                    'FixtureId1',
                    'FixtureId2'
                ]
            },
            {
                _id: 'LeagueId2',
                leagueName: 'League2',
                teams: [
                    'TeamId3',
                    'TeamId4'
                ],
                fixtures: [
                    'FixtureId3',
                    'FixtureId4'
                ]
            }
        ],
        teams: [
            {
                _id: 'TeamId1',
                teamName: 'Team1'
            },
            {
                _id: 'TeamId2',
                teamName: 'Team2'
            },
            {
                _id: 'TeamId3',
                teamName: 'Team3'
            },
            {
                _id: 'TeamId4',
                teamName: 'Team4'
            }
        ]
    };
    it('should return the initial state', () => {
        const defaultState = {
            leagues: [],
            teams: [],
            fixtures: []
        };
        expect(data(undefined, {})).toEqual(defaultState);
    });
    it('should handle LOAD_ALL_LEAGUES_SUCCESS', () => {
        const mockLeague = [
            {
                _id: 'LeagueId1',
                leagueName: 'League1',
                teams: [
                    {
                        _id: 'TeamId1',
                        teamName: 'Team1'
                    },
                    {
                        _id: 'TeamId2',
                        teamName: 'Team2'
                    }
                ],
                fixtures: [
                    {
                        _id: 'FixtureId1'
                    },
                    {
                        _id: 'FixtureId2'
                    }
                ]
            },
            {
                _id: 'LeagueId2',
                leagueName: 'League2',
                teams: [
                    {
                        _id: 'TeamId3',
                        teamName: 'Team3'
                    },
                    {
                        _id: 'TeamId4',
                        teamName: 'Team4'
                    }
                ],
                fixtures: [
                    {
                        _id: 'FixtureId3'
                    },
                    {
                        _id: 'FixtureId4'
                    }
                ]
            }
        ];
        const mockAction = {
            type: LOAD_ALL_LEAGUES_SUCCESS,
            leagues: mockLeague
        };
        const newState = {
            leagues: [
                {
                    _id: 'LeagueId1',
                    leagueName: 'League1',
                    teams: [
                        'TeamId1',
                        'TeamId2'
                    ],
                    fixtures: [
                        'FixtureId1',
                        'FixtureId2'
                    ]
                },
                {
                    _id: 'LeagueId2',
                    leagueName: 'League2',
                    teams: [
                        'TeamId3',
                        'TeamId4'
                    ],
                    fixtures: [
                        'FixtureId3',
                        'FixtureId4'
                    ]
                }
            ],
            teams: [
                {
                    _id: 'TeamId1',
                    teamName: 'Team1'
                },
                {
                    _id: 'TeamId2',
                    teamName: 'Team2'
                },
                {
                    _id: 'TeamId3',
                    teamName: 'Team3'
                },
                {
                    _id: 'TeamId4',
                    teamName: 'Team4'
                }
            ],
            fixtures: [
                {
                    _id: 'FixtureId1'
                },
                {
                    _id: 'FixtureId2'
                },
                {
                    _id: 'FixtureId3'
                },
                {
                    _id: 'FixtureId4'
                }
            ]
        };
        expect(data(undefined, mockAction)).toEqual(newState);
    });
    it('should handle ADD_LEAGUE_SUCCESS', () => {
        const oldState = {
            leagues: []
        };
        const mockAction = {
            type: ADD_LEAGUE_SUCCESS,
            league: {
                leagueName: 'New League',
                _id: 'LeagueId'
            }
        };
        const newState = {
            leagues: [{
                leagueName: 'New League',
                _id: 'LeagueId'
            }]
        };
        expect(data(oldState, mockAction)).toInclude(newState);
    });
    it('should handle ADD_TEAM_SUCCESS', () => {
        const oldState = mockOldState;
        const mockAction = {
            type: ADD_TEAM_SUCCESS,
            leagueId: 'LeagueId1',
            team: {
                _id: 'TeamId5',
                teamName: 'Team5'
            }
        };
        const newState = {
            leagues: [
                {
                    _id: 'LeagueId1',
                    leagueName: 'League1',
                    teams: [
                        'TeamId1',
                        'TeamId2',
                        'TeamId5'
                    ],
                    fixtures: [
                        'FixtureId1',
                        'FixtureId2'
                    ]
                },
                {
                    _id: 'LeagueId2',
                    leagueName: 'League2',
                    teams: [
                        'TeamId3',
                        'TeamId4'
                    ],
                    fixtures: [
                        'FixtureId3',
                        'FixtureId4'
                    ]
                }
            ],
            teams: [
                {
                    _id: 'TeamId1',
                    teamName: 'Team1'
                },
                {
                    _id: 'TeamId2',
                    teamName: 'Team2'
                },
                {
                    _id: 'TeamId3',
                    teamName: 'Team3'
                },
                {
                    _id: 'TeamId4',
                    teamName: 'Team4'
                },
                {
                    _id: 'TeamId5',
                    teamName: 'Team5'
                }
            ]
        };
        expect(data(oldState, mockAction)).toInclude(newState);
    });
    it('should handle EDIT_LEAGUE_NAME_SUCCESS', () => {
        const oldState = {
            leagues: [{
                _id: 'LeagueId',
                leagueName: 'Old League'
            }]
        };
        const mockAction = {
            type: EDIT_LEAGUE_NAME_SUCCESS,
            _id: 'LeagueId',
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
    it('should handle EDIT_TEAM_NAME_SUCCESS', () => {
        const oldState = {
            teams: mockOldState.teams
        };
        const mockAction = {
            type: EDIT_TEAM_NAME_SUCCESS,
            teamName: 'Amended Team',
            _id: 'TeamId1'
        };
        const newState = {
            teams: [
                {
                    _id: 'TeamId1',
                    teamName: 'Amended Team'
                },
                {
                    _id: 'TeamId2',
                    teamName: 'Team2'
                },
                {
                    _id: 'TeamId3',
                    teamName: 'Team3'
                },
                {
                    _id: 'TeamId4',
                    teamName: 'Team4'
                }
            ]
        };
        expect(data(oldState, mockAction)).toInclude(newState);
    });
    it('should handle DELETE_TEAM_SUCCESS', () => {
        const oldState = mockOldState;
        const mockAction = {
            type: DELETE_TEAM_SUCCESS,
            _id: 'TeamId2'
        };
        const newState = {
            leagues: [
                {
                    _id: 'LeagueId1',
                    leagueName: 'League1',
                    teams: [
                        'TeamId1'
                    ],
                    fixtures: [
                        'FixtureId1',
                        'FixtureId2'
                    ]
                },
                {
                    _id: 'LeagueId2',
                    leagueName: 'League2',
                    teams: [
                        'TeamId3',
                        'TeamId4'
                    ],
                    fixtures: [
                        'FixtureId3',
                        'FixtureId4'
                    ]
                }
            ],
            teams: [
                {
                    _id: 'TeamId1',
                    teamName: 'Team1'
                },
                {
                    _id: 'TeamId3',
                    teamName: 'Team3'
                },
                {
                    _id: 'TeamId4',
                    teamName: 'Team4'
                }
            ]
        };
        expect(data(oldState, mockAction)).toInclude(newState);
    });
    it('should handle DELETE_LEAGUE_SUCCESS', () => {
        const oldState = mockOldState;
        const mockAction = {
            type: DELETE_LEAGUE_SUCCESS,
            _id: 'LeagueId1'
        };
        const newState = {
            leagues: [
                {
                    _id: 'LeagueId2',
                    leagueName: 'League2',
                    teams: [
                        'TeamId3',
                        'TeamId4'
                    ],
                    fixtures: [
                        'FixtureId3',
                        'FixtureId4'
                    ]
                }
            ]
        };
        expect(data(oldState, mockAction)).toInclude(newState);
    });
});


