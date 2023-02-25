import { Box } from '@mui/material'
import React from 'react'
import { NavBar } from '../../components/NavBar'
import { TodoListBody } from './TodoListBody'

export function Task (): JSX.Element {
  return (
    <Box>
      <NavBar />
      <TodoListBody />
    </Box>
  )
}
