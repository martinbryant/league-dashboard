import { combineReducers } from 'redux';

const leagues = (state = [], action) => state;

const selectedLeague = (state = '', action) => {
    if (action.type === 'CHANGE_SELECTED_LEAGUE') {
        return action._id;
    } else {
        return state;
    }
};

const data = combineReducers({
    leagues,
    selectedLeague
});

export default data;

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


