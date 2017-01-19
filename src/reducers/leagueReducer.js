export default function leagueReducer(state = [], action) {
    switch (action.type) {
        case 'CHANGE_LEAGUE':
            return Object.assign({}, state.find(x => x._id === action.league));

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
