import { type Todo } from '../../../type/Todo'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material'
import React from 'react'
import { TodoElement } from './TodoElement'
import { TodoListCreate } from './TodoListCreate'

export function TodoListBody (): JSX.Element {
  const todoList: Todo[] = useSelector((state: any) => state.todoList)
  const todoListElements: JSX.Element[] = []
  for (const todo of todoList) {
    todoListElements.push(
      <TodoElement todo={todo} />
    )
  }
  return (
    <Box style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Box style={{
        width: '90%'
      }}>
        {todoListElements}
        <TodoListCreate />
      </Box>
    </Box>
  )
}
