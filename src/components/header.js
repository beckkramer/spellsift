import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"

import { Box, Flex, Text } from 'rebass'
import { Label, Select } from '@rebass/forms'

import { useLocation, useNavigate } from '@reach/router'

const Header = ({ siteTitle }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      gameTerms {
        playerClasses
      }
    }
  `)
  const onSelect = (event) => {
    navigate(event.target.value)
  }

  return (
    <Flex
      as='header'
      bg='accent'
      alignItems='center'
      justifyContent='space-between'
      p={3}
    >
        <Text
          variant='subHead'
          color='inverted'
        >
          {siteTitle}
        </Text>
        <Box>
          <Label htmlFor="playerClass"></Label>
          <Select
            id='playerClass'
            onChange={onSelect}
            defaultValue={location.pathname}
          >
          {data.gameTerms.playerClasses.map(playerClass => 
            <option key={playerClass} value={`/spells/${playerClass}`}>{playerClass}</option>
          )}
          </Select>
        </Box>
    </Flex>
  )
}

export default Header
