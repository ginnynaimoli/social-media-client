import { Box, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Navbar from 'components/Navbar'
import FriendList from 'components/FriendList'
import UserInfo from 'components/UserInfo'
import PostInput from 'components/PostInput'
import Posts from 'components/Posts'

const ProfilePage = () => {
  const [user, setUser] = useState(null)
  const { userId } = useParams()
  const token = useSelector((state) => state.token)
  const isDesktopScreens = useMediaQuery("(min-width:1000px)")
  
  const getUser = async () => {
    const response = await fetch(`https://sharecircle-server.onrender.com/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    })
    const data = await response.json()
    setUser(data)
  }

  useEffect(() => {
    getUser()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null

  return (
    <Box>
      <Navbar />
      <Box width="100%"
        padding="2rem 6%"
        display={isDesktopScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isDesktopScreens ? "26%" : undefined}>
          <UserInfo userId={userId} picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <FriendList userId={userId} />
        </Box>

        <Box
          flexBasis={isDesktopScreens ? "42%" : undefined}
          mt={isDesktopScreens ? undefined : "2rem"}
        >
          <PostInput picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <Posts userId={userId} isProfile />
        </Box>
      </Box>
    </Box>
  )
}

export default ProfilePage