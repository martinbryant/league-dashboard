import expect from 'expect';

import ui from '../ui-reducer';
import {
    CHANGE_SELECTED_LEAGUE,
    SORT_TABLE_BY_COLUMN,
    TOGGLE_SORT_ORDER,
    ENABLE_EDIT_MODE,
    DISABLE_EDIT_MODE
} from '../../constants';

describe('ui reducer tests', () => {
    it('should return the initial state', () => {
        const defaultState = {
            tableColumns: [],
            sortColumn: 'default',
            sortOrder: 'desc',
            inEditMode: false,
            editField: '',
            loading: false,
            modal: { isOpen: false },
            selectedLeague:''
        };
        expect(ui(undefined, {type : 'init'})).toEqual(defaultState);
    });
    it('should handle CHANGE_SELECTED_LEAGUE', () => {
        const oldState = {
            sortColumn: 'not default',
            selectedLeague : ''
        };
        const mockAction = {
            type: CHANGE_SELECTED_LEAGUE,
            _id: 'id'
        };
        const newState = {
            sortColumn: 'default',
            selectedLeague: 'id'
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
    it('should handle ENABLE_EDIT_MODE', () => {
        const mockAction = {
            type: ENABLE_EDIT_MODE,
            editField: 'leagueName'
        };
        const newState = {
            inEditMode: true,
            editField: 'leagueName'
        };
        expect(ui(undefined, mockAction)).toInclude(newState);
    });
    it('should handle DISABLE_EDIT_MODE', () => {
        const oldState = {
            inEditMode: true,
            editField: 'Field 1'
        };
        const mockAction = {
            type: DISABLE_EDIT_MODE
        };
        const newState = {
            inEditMode: false,
            editField: ''
        };
        expect(ui(oldState, mockAction)).toInclude(newState);
    });
});