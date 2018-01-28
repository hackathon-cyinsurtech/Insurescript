import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const retrievedDoctors = createReducer({}, {
  [types.SET_RETRIEVED_DOCTORS](state, action) {
    let newState = []
    action.doctors.forEach( (doctor) => {
      let newDoctor = Object.assign({}, doctor.doctor);
      newState.push(newDoctor)
    });
    return newState;
  },

});
