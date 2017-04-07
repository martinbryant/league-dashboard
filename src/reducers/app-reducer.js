import {combineReducers} from 'redux';

import data from './data-reducer';
import ui from './ui-reducer';

const app = combineReducers({
    data,
    ui
});

export default app;