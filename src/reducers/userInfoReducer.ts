import { type Action, type UserInfo } from '../type'
import { ActionType } from '../type/ActionType'

const initState: UserInfo = {
  name: ''
}

export function userInfoReducer (state: UserInfo = initState, action: Action): UserInfo {
  switch (action.type) {
    case ActionType.UpdateUserName: {
      return {
        ...state,
        name: action.payload
      }
    }
    case ActionType.Logout: {
      return {
        ...state,
        ...initState
      }
    }
  }
  return state
}
