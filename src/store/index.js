import { combineReducers, createStore } from "redux";

import auth from './auth/reducers'
import flash from './flash/reducers'

const reducers = combineReducers({
  auth,
  flash
})

export const store = createStore(reducers)