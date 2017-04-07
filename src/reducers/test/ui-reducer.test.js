import expect from 'expect';

import ui from '../ui-reducer';

describe('data reducer tests', () => {
    it('should return the initial state', () => {
        const defaultState = {
            tableColumns: [],
            sortColumn: 'default',
            sortOrder: 'desc'
        };
        expect(ui(undefined, {})).toEqual(defaultState);
    });
    it('should handle CHANGE_SELECTED_LEAGUE', () => {
        const oldState = {
            sortColumn: 'not default'
        };
        const mockAction = {
            type: 'CHANGE_SELECTED_LEAGUE',
            _id: 'id'
        };
        const newState = {
            sortColumn : 'default'
        };
        expect(ui(oldState, mockAction)).toInclude(newState);
    });
});