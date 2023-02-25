import { type Todo } from '../type/Todo'
import { type Action } from '../type'
import { ActionType } from '../type/ActionType'
import uuid from 'react-uuid'

const initState: Todo[] = [
  {
    id: '123123',
    content: 'First task',
    isFinished: false
  },
  {
    id: '123',
    content: 'Another task',
    isFinished: false
  },
  {
    id: '122',
    content: 'Finished Task',
    isFinished: true
  }
]

export function todoListReducer (state: Todo[] = initState, action: Action): Todo[] {
  const { type, payload } = action
  switch (type) {
    case ActionType.newTodo: {
      const newTodo: Todo = {
        id: uuid(),
        content: payload,
        isFinished: false
      }
      return [
        ...state,
        newTodo
      ]
    }
    case ActionType.finishTodo: {
      const targetTodoId: string = payload
      const newTodoList = [...state]
      for (const todo of newTodoList) {
        if (targetTodoId === todo.id) {
          todo.isFinished = true
        }
      }
      return newTodoList
    }
    case ActionType.deleteTodo: {
      const targetTodoId: string = payload
      const newTodoList = [...state]
      for (let i = 0; i < newTodoList.length; i++) {
        if (newTodoList[i].id === targetTodoId) {
          newTodoList.splice(i, 1)
          return newTodoList
        }
      }
      return state
    }
    case ActionType.Logout: {
      return [...initState]
    }
  }
  return state
}
