import { Box, IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'
import { ActionType } from '../../../type/ActionType'

interface Props {
  id: string
}

export function TodoElementDeleteButton (props: Props): JSX.Element {
  const dispatch = useDispatch()
  const onDelete = (): void => {
    dispatch({
      type: ActionType.deleteTodo,
      payload: props.id
    })
  }

  return (
    <Box>
      <IconButton style={{
        color: '#aaa'
      }} onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </Box>
  )
}
