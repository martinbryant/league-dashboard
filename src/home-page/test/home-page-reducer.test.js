import expect from 'expect';

import homePage from '../home-page-reducer';

describe('home page reducer', () => {
    it('should return the initial state', () => {
        const defaultState = {
            leagues: [],
            tableColumns: [],
            selectedLeague: '',
            sortColumn: 'default',
            sortOrder: 'desc'
        };
        expect(homePage(undefined, {})).toEqual(defaultState);
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
            selectedLeague: 'id',
            sortColumn: 'default'
        };
        expect(homePage(oldState, mockAction)).toInclude(newState);
    });
    it('should handle SORT_TABLE_BY_COLUMN', () => {
        const oldState = {
            sortOrder: 'not desc'
        };
        const mockAction = {
            type: 'SORT_TABLE_BY_COLUMN',
            column: 'column'
        };
        const newState = {
            sortColumn: 'column',
            sortOrder: 'desc'
        };
        expect(homePage(oldState, mockAction)).toInclude(newState);
    });
    it('should handle TOGGLE_SORT_ORDER', () => {
        const mockAction = {
            type: 'TOGGLE_SORT_ORDER',
            order: 'order'
        };
        const newState = {
            sortOrder: 'order'
        };
        expect(homePage(undefined, mockAction)).toInclude(newState);
    });
});