import * as types from '../actions/types'
import createReducer from '../lib/createReducer'

export const userDetails = createReducer({}, {
  [types.SET_USER_DETAILS](state, action) {
    return action.payload
  },

});
