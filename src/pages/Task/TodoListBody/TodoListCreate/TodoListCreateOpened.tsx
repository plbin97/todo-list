import { Box, Card, IconButton, TextField } from '@mui/material'
import React, { useRef } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { useDispatch } from 'react-redux'
import { ActionType } from '../../../../type/ActionType'

interface Props {
  close: () => void
}

export function TodoListCreateOpened (props: Props): JSX.Element {
  const textInputRef = useRef(null)
  const dispatch = useDispatch()
  const createTodo = (): void => {
    if (textInputRef.current !== null) {
      const contentInput: HTMLInputElement = textInputRef.current
      const content = contentInput.value
      if (content !== '') {
        dispatch({
          type: ActionType.newTodo,
          payload: content
        })
      }
      props.close()
    }
  }
  return (
    <Card style={{
      padding: '10px',
      display: 'flex'
    }}>
      <Box style={{
        width: '80%',
        marginRight: 'auto'
      }}>
        <TextField inputRef={textInputRef} fullWidth color='warning' label='Content' variant='standard'/>
      </Box>
      <Box style={{
        marginTop: '15px'
      }}>
        <IconButton style={{
          color: '#f9c'
        }} onClick={createTodo}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
      <Box style={{
        marginTop: '15px',
        marginRight: '10px'
      }}>
        <IconButton style={{
          color: '#aaa'
        }} onClick={props.close}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Card>
  )
}
