import expect from 'expect';

import { mapStateToProps } from '../league-dropdown-container';
import { changeSelectedLeague } from '../home-page-actions';

const mockLeagues = [
    {
        _id: 'id 1',
        leagueName: 'league 1',
        teams: [],
        fixtures: []
    },
    {
        _id: 'id 2',
        leagueName: 'league 2',
        teams: [],
        fixtures: []
    }
];

const mockState = {
    data: {
        selectedLeague: 'this league',
        leagues: mockLeagues
    }
};

const expected = {
    selectedLeague: 'this league',
    leagues: [
        {
            _id: 'id 1',
            leagueName: 'league 1'
        },
        {
            _id: 'id 2',
            leagueName: 'league 2'
        }
    ]
};

describe('<LeagueDropdownContainer/>', () => {
    it('mapStateToProps should return selectedLeague, leagues _id and leagueName', () => {
        expect(mapStateToProps(mockState)).toEqual(expected);
    });
});