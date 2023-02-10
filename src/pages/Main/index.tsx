import { Box } from '@mui/material'
import React from 'react'
import { MainTitle } from './MainTitle'
import { NameForm } from './NameForm'

export function Main (): JSX.Element {
  return (
    <Box style={{
      position: 'absolute',
      left: 0,
      right: 0,
      height: '100%',
      width: '100%'
    }}>
      <MainTitle title='My Todo List' />
      <NameForm />
    </Box>
  )
}
