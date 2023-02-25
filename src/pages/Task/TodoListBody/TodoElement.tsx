import { type Todo } from '../../../type/Todo'
import { Box, Card } from '@mui/material'
import React from 'react'
import { TodoElementDeleteButton } from './TodoElementDeleteButton'
import { TodoElementFinishButton } from './TodoElementFinishButton'

interface Props {
  todo: Todo
}
export function TodoElement (props: Props): JSX.Element {
  return (
    <Card style={{
      margin: '10px',
      padding: '20px',
      display: 'flex',
      background: props.todo.isFinished ? '#eee' : '#fff'
    }}>
      <Box style={{
        fontSize: '20px',
        color: '#666',
        marginRight: 'auto',
        marginTop: '5px',
        textDecoration: props.todo.isFinished ? 'line-through' : 'none'
      }}>
        { props.todo.content }
      </Box>
      {!props.todo.isFinished && (
        <TodoElementFinishButton id={props.todo.id} />
      )}
      <TodoElementDeleteButton id={props.todo.id} />
    </Card>
  )
}
