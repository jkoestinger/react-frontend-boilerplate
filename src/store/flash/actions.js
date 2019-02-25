import { CLEAR_FLASHES, SET_ERROR, SET_SUCCESS } from './actionTypes'

export const successMessage = (message) => { return { type: SET_SUCCESS, message } }
export const errorMessage = (message) => { return { type: SET_ERROR, message } }
export const clear = () => {return {type: CLEAR_FLASHES}}