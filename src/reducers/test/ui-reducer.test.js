import expect from 'expect';

import ui from '../ui-reducer';
import {
    CHANGE_SELECTED_LEAGUE,
    SORT_TABLE_BY_COLUMN,
    TOGGLE_SORT_ORDER
} from '../../constants';

describe('ui reducer tests', () => {
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
            type: CHANGE_SELECTED_LEAGUE,
            _id: 'id'
        };
        const newState = {
            sortColumn: 'default'
        };
        expect(ui(oldState, mockAction)).toInclude(newState);
    });
    it('should handle SORT_TABLE_BY_COLUMN', () => {
        const oldState = {
            sortOrder: 'asc'
        };
        const mockAction = {
            type: SORT_TABLE_BY_COLUMN,
            column: 'column'
        };
        const newState = {
            sortColumn: 'column',
            sortOrder: 'desc'
        };
        expect(ui(oldState, mockAction)).toInclude(newState);
    });
    it('should handle TOGGLE_SORT_ORDER', () => {
        const mockAction = {
            type: TOGGLE_SORT_ORDER,
            order: 'desc'
        };
        const newState = {
            sortOrder: 'asc'
        };
        expect(ui(undefined, mockAction)).toInclude(newState);
    });
});