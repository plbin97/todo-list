import { Box, IconButton } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import React from 'react'
import { useDispatch } from 'react-redux'
import { ActionType } from '../../../type/ActionType'

interface Props {
  id: string
}

export function TodoElementFinishButton (props: Props): JSX.Element {
  const dispatch = useDispatch()
  const onFinish = (): void => {
    dispatch({
      type: ActionType.finishTodo,
      payload: props.id
    })
  }

  return (
    <Box>
      <IconButton style={{
        color: '#f9c'
      }} onClick={onFinish}>
        <CheckIcon />
      </IconButton>
    </Box>
  )
}
