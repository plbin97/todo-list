import { Box, TextField } from '@mui/material'
import React from 'react'

export function Main (): JSX.Element {
  return (
    <Box>
      <Box>
        My Todo List
      </Box>
      <Box>
        <TextField label="Your Name" variant="outlined" />
      </Box>
    </Box>
  )
}
