import { combineReducers } from 'redux';
import * as SymptomsReducer from './symptoms'
import * as DetailsReducer from './details'

export default combineReducers(Object.assign(
    SymptomsReducer,
    DetailsReducer
));
