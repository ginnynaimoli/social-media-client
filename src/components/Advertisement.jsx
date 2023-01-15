import { Typography, useTheme } from '@mui/material'
import FlexBetween from 'utilities/FlexBetween'
import Wrapper from 'utilities/Wrapper'
import React from 'react'

const Advertisement = () => {
  const { palette } = useTheme()
  const dark = palette.neutral.dark
  const main = palette.neutral.main
  const medium = palette.neutral.medium

  return (
    <Wrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">Sponsored</Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>

      <img
        width="100%"
        height="auto"
        alt="advert"
        src="../assets/image.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />

      <FlexBetween>
        <Typography color={main}>Diet Coke</Typography>
        <Typography color={medium}>coca-colacompany.com</Typography>
      </FlexBetween>

      <Typography color={medium} m="0.5rem 0">
        Diet Coke® is the perfect balance of crisp + refreshing. It's your deliciously fizzy go-to companion. The beverage you can count on. Always.
      </Typography>
    </Wrapper>
  )
}

export default Advertisement