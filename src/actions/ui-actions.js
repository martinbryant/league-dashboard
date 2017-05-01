import {
    SORT_TABLE_BY_COLUMN,
    CHANGE_SELECTED_LEAGUE,
    TOGGLE_SORT_ORDER
} from '../constants';

export const changeSelectedLeague = _id => ({
    type: CHANGE_SELECTED_LEAGUE,
    _id
});

export const sortTableByColumn = column => ({
    type: SORT_TABLE_BY_COLUMN,
    column
});

export const toggleSortOrder = order => ({
    type: TOGGLE_SORT_ORDER,
    order
});