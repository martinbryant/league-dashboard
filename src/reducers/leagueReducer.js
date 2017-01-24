export default function leagueReducer(state = {}, action) {
    switch (action.type) {
        case 'CHANGE_SELECTED_LEAGUE':
            return Object.assign({}, state, {
                selectedLeague: action._id
            });

        case 'LOAD_LEAGUES_SUCCESS':
            return action.leagues;

        case 'CHANGE_LEAGUE_NAME_SUCCESS':
            return [
                ...state.filter(league => league._id !== action.league._id),
                Object.assign({}, action.league)
            ];

        case 'CHANGE_LEAGUE_NAME_ERROR':
            return state;

        default: return state;
    }
}
