import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from 'components/Navbar'
import Advertisement from 'components/Advertisement'
import UserInfo from 'components/UserInfo'
import PostInput from 'components/PostInput'
import Posts from 'components/Posts'
import FriendList from 'components/FriendList'

const Homepage = () => {
  const isDesktopScreens = useMediaQuery("(min-width: 1000px)")
  const { _id, picturePath } = useSelector((state) => state.user)

  return (
    <Box>
      <Navbar />
      <Box width="100%"
        padding="2rem 6%"
        display={isDesktopScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isDesktopScreens ? "26%" : undefined}>
          <UserInfo userId={_id} picturePath={picturePath} />
        </Box>

        <Box
          flexBasis={isDesktopScreens ? "42%" : undefined}
          mt={isDesktopScreens ? undefined : "2rem"}
        >
          <PostInput picturePath={picturePath} />
          <Posts userId={_id} />
        </Box>

        {isDesktopScreens && (
          <Box flexBasis="26%">
            <Advertisement />
            <Box m="2rem 0" />
            <FriendList userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Homepage