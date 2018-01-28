import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const retrievedSymptoms = createReducer({}, {
  [types.SET_RETRIEVED_DOCTORS](state, action) {
    let newState = []
    action.doctors.forEach( (doctor) => {
      let id = doctor.ID
      let name = doctor.Name
      let rating = doctor.rating
      let latitude = doctor.latitude
      let longitude = doctor.longitude
      let newDoctor = Object.assign({}, {id: id, name: name, rating: rating, latitude: latitude, longitude: longitude});
      newState.push(newDoctor)
    });
    return newState;
  },

});

export const matchedSymptoms = createReducer({}, {
  [types.SET_MATCHED_SYMPTOMS](state, action) {
    let newState = []
    action.doctors.forEach( (doctor) => {
      let id = doctor.ID
      let name = doctor.Name
      let rating = doctor.rating
      let latitude = doctor.latitude
      let longitude = doctor.longitude
      let newDoctor = Object.assign({}, {id: id, name: name, rating: rating, latitude: latitude, longitude: longitude});
      newState.push(newDoctor)
    });
    return newState;
  },

});
