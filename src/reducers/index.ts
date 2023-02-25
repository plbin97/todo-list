import { userInfoReducer } from './userInfoReducer'
import { combineReducers } from '@reduxjs/toolkit'
import { todoListReducer } from './todoListReducer'

export const reducers = combineReducers({
  userInfo: userInfoReducer,
  todoList: todoListReducer
})
