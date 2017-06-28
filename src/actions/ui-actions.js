import {
    SORT_TABLE_BY_COLUMN,
    CHANGE_SELECTED_LEAGUE,
    TOGGLE_SORT_ORDER,
    ENABLE_EDIT_MODE,
    DISABLE_EDIT_MODE
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

export const enableEditMode = editField => ({
    type: ENABLE_EDIT_MODE,
    editField
});

export const disableEditMode = () => ({
    type: DISABLE_EDIT_MODE
});

export const newName = name => ({
    type: 'UPDATE_NEW_NAME',
    name
});

export const enableLoading = () => ({
    type: 'LOADING'
});

export const openDeleteModal = (id, name, field) => ({
    type: 'SHOW_DELETE_MODAL',
    id,
    name,
    field
});

export const closeDeleteModal = id => ({
    type: 'CLOSE_DELETE_MODAL',
    id
});