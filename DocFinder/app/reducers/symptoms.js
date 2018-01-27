import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const retrievedSymptoms = createReducer({}, {
  [types.SET_RETRIEVED_SYMPTOMS](state, action) {
    let newState = []
    action.symptoms.forEach( (symptom) => {
      let id = symptom.ID
      let name = symptom.Name
      let newSymptom = Object.assign({}, {id: id, name: name});
      newState.push(newSymptom)
    });
    return newState;
  },

});

export const matchedSymptoms = createReducer({}, {
  [types.SET_MATCHED_SYMPTOMS](state, action) {
    let newState = []
    action.symptoms.forEach( (symptom) => {
      let id = symptom.ID
      let name = symptom.Name
      let newSymptom = Object.assign({}, {id: id, name: name});
      newState.push(newSymptom)
    });
    return newState;
  },

});
