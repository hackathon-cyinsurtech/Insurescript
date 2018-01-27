import * as types from './types'
import Api from '../lib/api'

export function fetchSymptoms() {
  return (dispatch, getState) => {
    return Api.get(`/symptoms`).then(resp => {
      dispatch(setRetrievedSymptoms({symptoms: resp}));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function matchSymptoms(userSymptoms, symptomsList) {
  return (dispatch, getState) => {
    let matchedSymptoms = []
    userSymptoms.forEach((userSymptom) => {
      symptomsList.forEach((symptom) => {
        if(userSymptom === symptom.name) {
          matchedSymptoms.push(symptom)
        }
      })
    })
    setMatchedSymptoms(matchedSymptoms)
  }
}

export function setRetrievedSymptoms({ symptoms }) {
  return {
    type: types.SET_RETRIEVED_SYMPTOMS,
    symptoms,
  }
}

export function setMatchedSymptoms({ symptoms }) {
  return {
    type: types.SET_MATCHED_SYMPTOMS,
    symptoms,
  }
}
