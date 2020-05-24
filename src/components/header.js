import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Box, Text } from 'rebass'

const Header = ({ siteTitle }) => (
  <Box
    as='header'
    bg='accent'
    p={3}
  >
      <Text
        variant='subHead'
        color='inverted'
        m={0}
      >
        
          {siteTitle}
      </Text>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
