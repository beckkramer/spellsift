import React from 'react'
import { Box, Link as RebassLink, Text } from 'rebass'

const Footer = () => {
  return (
    <Box
      p={3}
    >
      <Text
        variant="small"
        textAlign="center"
        pt={4}
        sx={{
          borderTop: '1px solid',
          borderTopColor: 'accent',
        }}
      >
        This application uses trademarks and/or copyrights owned by Paizo Inc., which are used under Paizo's Community Use Policy. We are expressly prohibited from charging you to use or access this content. This application is not published, endorsed, or specifically approved by Paizo Inc. For more information about Paizo's Community Use Policy, please visit paizo.com/communityuse. For more information about Paizo Inc. and Paizo products, please visit paizo.com.
      </Text>
    </Box>
  )
}

export default Footer