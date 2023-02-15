import { type Action } from '../type'
import { ActionType } from '../type/ActionType'

export function updateUserName (username: string): Action {
  return {
    type: ActionType.UpdateUserName,
    payload: username
  }
}
