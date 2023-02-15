import { userInfoReducer } from './userInfoReducer'
import { combineReducers } from '@reduxjs/toolkit'

export const reducers = combineReducers({
  userInfo: userInfoReducer
})
