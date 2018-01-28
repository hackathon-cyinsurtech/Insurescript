import * as types from './types'
import Api from '../lib/api'

export function fetchDoctors(specialty, insurance, latitude, longitude) {
  return (dispatch, getState) => {
    return Api.getDoctors(`/doctors?insurance=${insurance}&specialty=${specialty}&latitude=${latitude}&longitude=${longitude}`).then(resp => {
      dispatch(setRetrievedDoctors({doctors: resp}));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function setRetrievedDoctors({ doctors }) {
  return {
    type: types.SET_RETRIEVED_DOCTORS,
    doctors,
  }
}
