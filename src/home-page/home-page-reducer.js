import { combineReducers } from 'redux';

const leagues = (state = [], action) => state;

const tableColumns = (state = [], action) => state;

const selectedLeague = (state = '', action) => {
    if (action.type === 'CHANGE_SELECTED_LEAGUE') {
        return action._id;
    } else {
        return state;
    }
};

const sortColumn = (state = 'default', action) => {
    switch (action.type) {
        case 'SORT_TABLE_BY_COLUMN':
            return action.column;
        case 'CHANGE_SELECTED_LEAGUE':
            return 'default';
        default: return state;
    }
};

const sortOrder = (state = 'desc', action) => {
    switch (action.type) {
        case 'TOGGLE_SORT_ORDER':
            return (action.order == 'desc') ? 'asc' : 'desc';
        case 'SORT_TABLE_BY_COLUMN':
            return 'desc';
        default: return state;
    }
};

const homePage = combineReducers({
    leagues,
    tableColumns,
    selectedLeague,
    sortColumn,
    sortOrder
});

export default homePage;

//Changed this reducer so each reducer handles own slice of state.
//Had to specify leagues and tableColumns above or the initial state
//when creating the store would not initialise the value correctly
//meaning it would ignore both values

// const homePage = (state = {}, action) => {
//     switch (action.type) {
//         case 'CHANGE_SELECTED_LEAGUE':
//             return Object.assign({}, state, {
//                 selectedLeague: action._id,
//                 sortField: 'default'
//             });
//         case 'RE_ORDER_TABLE':
//             return Object.assign({}, state, {
//                 sortField: action.column
//             });

//         default: return state;
//     }
// };


