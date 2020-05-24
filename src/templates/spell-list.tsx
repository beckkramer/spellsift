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
      <Heading as='h1' variant='heading'>Spells for: {pageContext.class}</Heading>
      <Box
        sx={{
          display: 'grid',
          gap: 3,
        }}
      >
        {pageContext.spells.map(spell => (
          <Box
            key={`spell-${spell.id}`}
            mt={2}
            pt={4}
            sx={{
              borderTop: '1px solid',
              borderTopColor: 'accent',
            }}
          >
            <Flex alignItems='flex-end' justifyContent='space-between'>
              <Heading as='h2' variant='subHead' lineHeight="0.75">{spell.name}</Heading>
              <Text as='span' lineHeight='1' variant='label'>Level {spell[pageContext.class]}</Text>
            </Flex>
            <Text my={3} variant='body' dangerouslySetInnerHTML={{__html: spell.short_description}} />
            <Box  />
            <SpellTable {...spell} />
            <RebassLink as={Link} variant='linkButton' to={`/spells/all/${spell.id}`}>Full Spell Description</RebassLink>
          </Box>
        ))}
      </Box>
    </Layout>
  )
}
