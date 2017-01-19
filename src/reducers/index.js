import { combineReducers } from 'redux';

import leagues from './leagueReducer';

const rootReducer = combineReducers({
    leagues
});

export default rootReducer;