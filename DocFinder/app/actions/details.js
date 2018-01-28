import * as types from './types'

export const saveDetails = (details) => ({
    type: types.SET_USER_DETAILS,
    payload: details
})

export const saveSpecialty = (specialty) => ({
    type: types.SET_RETRIEVED_SPECIALTY,
    payload: specialty
})
