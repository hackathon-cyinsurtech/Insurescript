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

export function fetchSpecialty(selectedSymptoms, gender, yearOfBirth) {
  let symptoms = selectedSymptoms.split(',');
  let url = `diagnosis/specialisations?symptoms=` + JSON.stringify(symptoms) + `&gender=${gender}&year_of_birth=${yearOfBirth}`;
  return (dispatch, getState) => {
    return Api.get(url).then(resp => {
      dispatch(setRetrievedSpecialty({diagnosis: resp}));
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

export function setRetrievedSpecialty( { specialties }){
  let maxDiagnosisAccuracy = 0.0
  let selectedSpecialty = 'General Practitioner'
  specialties.forEach( (specialty) => {
    if (specialty.accuracy > maxDiagnosisAccuracy) {
      maxSpecialtyAccuracy = specialty.accuracy
      selectedSpecialty = specialty.name
    }
  })
  return {
    type: types.SET_RETRIEVED_SPECIALTY,
    specialty: selectedSpecialty
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
