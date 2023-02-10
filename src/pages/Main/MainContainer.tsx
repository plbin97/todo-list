import { Box } from '@mui/material'
import React from 'react'

interface Props {
  marginTop: number
  width: number
  color?: string
  children: JSX.Element
}

export function MainContainer (props: Props): JSX.Element {
  return (
    <Box style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: `${props.marginTop}px`
    }}>
      <Box style={{
        width: `${props.width}px`,
        color: props.color !== undefined ? props.color : 'inherit'
      }}>
        {props.children}
      </Box>
    </Box>
  )
}
