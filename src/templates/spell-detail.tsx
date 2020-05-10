import React from "react"
import { Heading, Text } from 'rebass'

import Layout from '../components/Layout'
import SpellTable from '../components/SpellTable'

const SpellList = ({ pageContext }) => {

  

  return (
    <Layout>
      <Heading as='h1'>{pageContext.name}</Heading>
      <SpellTable {...pageContext} />
      <Text variant='body' dangerouslySetInnerHTML={{__html: pageContext.description_formatted}} />
    </Layout>
  )
}

export default SpellList
