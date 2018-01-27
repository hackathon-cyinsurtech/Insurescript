import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const retrievedSymptoms = createReducer({}, {
  [types.SET_RETRIEVED_SYMPTOMS](state, action) {
    let newState = {}
    action.symptoms.forEach( (symptom) => {
      let id = symptom.ID
      newState[id] = Object.assign({}, symptom, { id });
    });
    return newState;
  },

});
