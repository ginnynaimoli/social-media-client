import { useTheme } from '@emotion/react'
import { useMediaQuery, Box, Typography } from '@mui/material'
import React from 'react'
import Form from './Form'

const LoginPage = () => {
  const theme = useTheme()
  const isDesktopScreens = useMediaQuery("(min-width: 1000px)")
  
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Sharecircle
        </Typography>
      </Box>

      <Box
        width={isDesktopScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Sharecircle, the Social Media to share your lens to the world in a whole new way!
        </Typography>
        <Form />
      </Box>
    </Box>
  )
}

export default LoginPage