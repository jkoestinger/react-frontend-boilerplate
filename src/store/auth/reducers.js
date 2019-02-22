import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";



export default function auth(state = {user: null, token: null}, action) {
  switch(action.type) {
    case LOGIN_USER:
      return {
        token: action.token,
        user: action.user
      }
    case LOGOUT_USER:
      return {user: null, token: null}
    default:
      return state
  }
}