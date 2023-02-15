import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export function Task (): JSX.Element {
  const navigate = useNavigate()
  const username = useSelector((state: any) => state.userInfo.name)

  useEffect(() => {
    if (username === '') {
      navigate('/')
    }
  }, [username])

  return (
    <Box>
      Hi {username}
    </Box>
  )
}
