import { CLEAR_FLASHES, SET_ERROR, SET_SUCCESS } from "./actionTypes";



export default function flash(state = {message: null}, action) {
  switch(action.type) {
    case CLEAR_FLASHES:
      return {
        message: null
      }
    case SET_ERROR:
      return {
        message: {
          type: 'danger',
          text: action.message
        }
      }
    case SET_SUCCESS:
      return {
        message: {
          type: 'success',
          text: action.message
        }
      }
    default:
      return state
  }
}