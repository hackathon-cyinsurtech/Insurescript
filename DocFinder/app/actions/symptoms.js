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

export function setRetrievedSymptoms({ symptoms }) {
  return {
    type: types.SET_RETRIEVED_SYMPTOMS,
    symptoms,
  }
}
