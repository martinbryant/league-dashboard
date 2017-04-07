import expect from 'expect';

import data from '../data-reducer';

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
            type: 'CHANGE_SELECTED_LEAGUE',
            _id: 'id'
        };
        const newState = {
            selectedLeague: 'id'
        };
        expect(data(undefined, mockAction)).toInclude(newState);
    });
});