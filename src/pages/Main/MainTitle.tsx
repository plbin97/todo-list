import { Box } from '@mui/material'
import React from 'react'

interface Props {
  title: string
}

export function MainTitle (props: Props): JSX.Element {
  return (
    <Box
      style={{
        display: 'flex',
        background: '#f9c',
        color: '#fff',
        textAlign: 'center',
        width: '100%',
        height: '40%',
        justifyContent: 'center'
      }}
    >
      <Box style={{
        alignSelf: 'flex-end',
        fontSize: 40,
        marginBottom: '4px'
      }}>
        {props.title}
      </Box>
    </Box>
  )
}
