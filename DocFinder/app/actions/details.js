import * as types from './types'

export const saveDetails = (details) => ({
    type: types.SET_USER_DETAILS,
    payload: details
})
