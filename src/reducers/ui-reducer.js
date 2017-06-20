import { combineReducers } from 'redux';

import {
    SORT_TABLE_BY_COLUMN,
    CHANGE_SELECTED_LEAGUE,
    TOGGLE_SORT_ORDER,
    ENABLE_EDIT_MODE,
    DISABLE_EDIT_MODE
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

const showConfirmModal = (state = false, action) => {
    switch (action.type) {
        case 'CONFIRM_DELETE_ACTION':
            return true;
        case 'CANCEL_CONFIRM_ACTION':
            return false;
        default: return state;
    }
};

const ui = combineReducers({
    sortColumn,
    sortOrder,
    tableColumns,
    inEditMode,
    editField,
    showConfirmModal
});

export default ui;