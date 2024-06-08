// src/reducers/index.js

import { combineReducers } from 'redux';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
    task: taskReducer,
});

export default rootReducer;
