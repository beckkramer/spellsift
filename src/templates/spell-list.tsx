import React from 'react'
import { Box, Flex, Heading, Link as RebassLink,  Text } from 'rebass'
import { Link } from 'gatsby'

import Layout from "../components/Layout"
import SpellTable from '../components/SpellTable'

export default function SpellList({ pageContext }) {

  const aspects = {
    caster:  ['effect', 'duration', 'range', 'area'],
    target:  ['targets', 'saving_throw'],
  }
  
  return (
    <Layout>
      <Heading as='h1'>{pageContext.class}</Heading>

      <Box
        sx={{
          bg: '#FBFAF6',
          display: 'grid',
          gap: 3,
        }}
      >
        {pageContext.spells.map(spell => (
          <Box
            key={`spell-${spell.id}`}
            bg='white'
            p={3}
            sx={{
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
            }}
          >
            <Flex justifyContent='space-between'>
              <Heading as='h2' variant='subHead'>{spell.name}</Heading>
              <Text as='span' variant='label'>Level {spell[pageContext.class]}</Text>
            </Flex>
            <Text variant='body' dangerouslySetInnerHTML={{__html: spell.short_description}} />
            <SpellTable {...spell} />
            <RebassLink as={Link} variant='linkButton' to={`/spells/all/${spell.id}`}>Full Spell Description</RebassLink>
          </Box>
        ))}
      </Box>
    </Layout>
  )
}
