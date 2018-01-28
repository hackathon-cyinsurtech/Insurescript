import { combineReducers } from 'redux';
import * as SymptomsReducer from './symptoms'
import * as DetailsReducer from './details'
import * as DoctorsReducer from './doctors'

export default combineReducers(Object.assign(
    SymptomsReducer,
    DetailsReducer,
    DoctorsReducer
));
