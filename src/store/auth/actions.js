import { LOGIN_USER, LOGOUT_USER } from './actionTypes'

export const login = (token, user) => { return { type: LOGIN_USER, token, user } }
export const logout = () => { return { type: LOGOUT_USER } }