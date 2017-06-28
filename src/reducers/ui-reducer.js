import { combineReducers } from 'redux';

import {
    SORT_TABLE_BY_COLUMN,
    CHANGE_SELECTED_LEAGUE,
    TOGGLE_SORT_ORDER,
    ENABLE_EDIT_MODE,
    DISABLE_EDIT_MODE,
    EDIT_TEAM_NAME_SUCCESS,
    ADD_TEAM_SUCCESS
} from '../constants';

const sortColumn = (state = 'default', action) => {
    switch (action.type) {
        case SORT_TABLE_BY_COLUMN:
            return action.column;
        case CHANGE_SELECTED_LEAGUE:
            return 'default';
        default: return state;
    }
};

const sortOrder = (state = 'desc', action) => {
    switch (action.type) {
        case TOGGLE_SORT_ORDER:
            return (action.order == 'desc') ? 'asc' : 'desc';
        case SORT_TABLE_BY_COLUMN:
            return 'desc';
        default: return state;
    }
};

const tableColumns = (state = [], action) => state;

const inEditMode = (state = false, action) => {
    switch (action.type) {
        case ENABLE_EDIT_MODE:
            return true;
        case DISABLE_EDIT_MODE:
            return false;
        default: return state;
    }
};

const editField = (state = '', action) => {
    switch (action.type) {
        case ENABLE_EDIT_MODE:
            return action.editField;
        case DISABLE_EDIT_MODE:
            return '';
        default: return state;
    }
};

const loading = (state = false, action) => {
    switch (true) {
        case action.type.includes('STARTED'):
            return true;
        case action.type.includes('SUCCESS'):
        case action.type.includes('ERROR'):
            return false;
        default: return state;
    }
};

const modal = (state = { isOpen: false }, action) => {
    switch (action.type) {
        case 'SHOW_DELETE_MODAL':
            return {
                ...state,
                id: action.id,
                name: action.name,
                field: action.field,
                isOpen: true
            };
        case 'CLOSE_DELETE_MODAL':
        case 'DELETE_TEAM_SUCCESS':
        case 'DELETE_LEAGUE_SUCCESS':
            return {
                isOpen: false
            };
        default: return state;
    }
};

const ui = combineReducers({
    sortColumn,
    sortOrder,
    tableColumns,
    inEditMode,
    editField,
    loading,
    modal
});

export default ui;