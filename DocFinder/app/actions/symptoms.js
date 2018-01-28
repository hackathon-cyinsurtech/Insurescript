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

export function fetchDiagnosis(selectedSymptoms, gender, yearOfBirth) {
  let symptoms = selectedSymptoms.split(',');
  let url = `${this.config.getAPIURL()}/diagnosis/specialisations?symptoms=` + JSON.stringify(symptoms) + `&gender=${gender}&year_of_birth=${yearOfBirth}`;
  return (dispatch, getState) => {
    return Api.get(url).then(resp => {
      dispatch(setRetrievedDiagnosis({diagnosis: resp}));
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

export function setRetrievedDiagnosis( { diagnosis }){
  return {
    type: types.SET_RETRIEVED_DIAGNOSIS,
    diagnosis:
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
