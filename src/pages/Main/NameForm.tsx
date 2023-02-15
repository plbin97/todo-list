import { Alert, Button, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import { MainContainer } from './MainContainer'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateUserName } from '../../actions'

export function NameForm (): JSX.Element {
  const [alert, setAlert] = useState('')
  const nameField = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onSubmit = (): void => {
    if (nameField.current !== null) {
      const nameInput: HTMLInputElement = nameField.current
      const userName = nameInput.value
      if (userName === '') {
        setAlert('Your name cannot be empty')
      } else {
        dispatch(updateUserName(userName))
        navigate('/task')
      }
    }
  }
  return (
    <>
      <MainContainer marginTop={8} width={228}>
        <TextField inputRef={nameField} label="Your Name" variant="outlined" color='warning' fullWidth/>
      </MainContainer>
      <MainContainer marginTop={8} width={228} color='#f9c'>
        <Button onClick={onSubmit} size='large' variant='outlined' color='inherit' fullWidth>Login</Button>
      </MainContainer>
      {alert !== '' && (
        <MainContainer marginTop={8} width={228}>
          <Alert severity="error">{alert}</Alert>
        </MainContainer>
      )}
    </>
  )
}
