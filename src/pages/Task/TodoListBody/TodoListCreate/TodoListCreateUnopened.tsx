import AddIcon from '@mui/icons-material/Add'
import { Button } from '@mui/material'
import React from 'react'

interface Props {
  onClick: () => void
}

export function TodoListCreateUnopened (props: Props): JSX.Element {
  return (
    <Button
      style={{
        color: '#f9c',
        borderColor: '#f9c'
      }}
      variant='outlined'
      onClick={props.onClick}
      fullWidth
      startIcon={ <AddIcon /> }
    />
  )
}
