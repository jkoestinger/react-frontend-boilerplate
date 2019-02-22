import { combineReducers, createStore } from "redux";

import auth from './auth/reducers'

const reducers = combineReducers({
  auth
})

export const store = createStore(reducers)