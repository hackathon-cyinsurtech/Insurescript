import * as types from './types'
import DocStorage from '../App'

export function fetchDoctors()) {
  return (dispatch, getState) => {
    return Api.get(`/symptoms`).then(resp => {
      dispatch(setRetrievedSymptoms({symptoms: resp}));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function matchDoctors(matchedSpecialties, doctorsMap) {
  return (dispatch, getState) => {
    let matchedDoctors = []
    matchedSpecialties.forEach( (specialty) => {
      Object.keys(doctorsMap).forEach( (doctorSpecialty) => {
        if (specialty === doctorSpecialty) {
          matchedSpecialties.push(_getDoctorsForSpecialty(doctorsMap, specialty))
        }
      }
    })
  })

    setMatchedDoctors(matchedDoctors)
  }
}

function _getDoctorsForSpecialty(doctorsMap, specialty) {
  let doctors = []
  doctorsMap[specialty].split('.').forEach( (doctor) => {
    doctors.push(JSON.parse(doctor))
  })

  return doctors;
}
export function setRetrievedDoctors({ doctors }) {
  return {
    type: types.SET_RETRIEVED_DOCTORS,
    doctors,
  }
}

export function setMatchedDoctors({ matchedDoctors }) {
  return {
    type: types.SET_MATCHED_DOCTORS,
    matchedDoctors,
  }
}
