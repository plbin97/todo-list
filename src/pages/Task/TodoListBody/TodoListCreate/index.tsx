import { Box } from '@mui/material'
import React, { useState } from 'react'
import { TodoListCreateOpened } from './TodoListCreateOpened'
import { TodoListCreateUnopened } from './TodoListCreateUnopened'

export function TodoListCreate (): JSX.Element {
  const [open, setOpen] = useState(false)
  const openForm = (): void => {
    setOpen(true)
  }
  const closeForm = (): void => {
    setOpen(false)
  }
  return (
    <Box style={{
      margin: '10px'
    }}>
      {open
        ? (
        <TodoListCreateOpened close={closeForm} />
          )
        : (
        <TodoListCreateUnopened onClick={openForm} />
          )}
    </Box>
  )
}
