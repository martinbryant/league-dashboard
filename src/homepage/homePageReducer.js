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

const sortField = (state = 'default', action) => {
    switch (action.type) {
        case 'RE_ORDER_TABLE':
            return action.column;
        case 'CHANGE_SELECTED_LEAGUE':
            return 'default';
        default: return state;
    }
};

const homePage = combineReducers({
    leagues,
    tableColumns,
    selectedLeague,
    sortField
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