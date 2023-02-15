import { Box, IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout'
import { logout } from '../../actions'

function NavBar (): JSX.Element {
  const navigate = useNavigate()
  const username = useSelector((state: any) => state.userInfo.name)
  const dispatch = useDispatch()

  const logoutEvent = (): void => {
    dispatch(logout())
  }

  useEffect(() => {
    if (username === '') {
      navigate('/')
    }
  }, [username])

  return (
    <Box style={{
      width: '100%',
      height: '100px',
      background: '#f9c',
      color: '#fff',
      display: 'flex'
    }}>
      <Box style={{
        fontSize: '20px',
        marginTop: '70px',
        marginLeft: '10px'
      }}>
        Todo List
      </Box>
      <Box style={{
        fontSize: '20px',
        marginTop: '70px',
        marginLeft: 'auto'
      }}>
        Hi, {username}
      </Box>
      <Box style={{
        marginTop: '60px',
        marginLeft: '10px',
        marginRight: '10px'
      }}>
        <IconButton onClick={logoutEvent} >
          <LogoutIcon style={{
            color: '#fff'
          }} />
        </IconButton>
      </Box>
    </Box>
  )
}

export { NavBar }
