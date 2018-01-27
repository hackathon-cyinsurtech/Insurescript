import { combineReducers } from 'redux';
import * as SymptomsReducer from './symptoms'

export default combineReducers(Object.assign(
    SymptomsReducer
));
