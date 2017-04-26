import { combineReducers } from 'redux';

import {
    SORT_TABLE_BY_COLUMN,
    CHANGE_SELECTED_LEAGUE,
    TOGGLE_SORT_ORDER
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

const ui = combineReducers({
    sortColumn,
    sortOrder,
    tableColumns
});

export default ui;