export default function homePageReducer(state = {}, action) {
    switch (action.type) {
        case 'CHANGE_SELECTED_LEAGUE':
            return Object.assign({}, state, {
                selectedLeague: action._id
            });

        default: return state;
    }
}