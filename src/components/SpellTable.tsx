import React from 'react'

import { Box, Text } from 'rebass'

type PropsT = {
  effect?: string
  duration?: string
  range?: string
  area?: string
  targets?: string
  saving_throw?: string
}

const SpellTable = (props: PropsT) => {

  const {
    effect,
    duration,
    range,
    area,
    targets,
    saving_throw,
  } = props

  const aspects = {
    caster:  ['effect', 'duration', 'range', 'area'],
    target:  ['targets', 'saving_throw'],
  }

  return (
    <Box as='table' my={3}>
      <Box as='tbody' pb={2}>
        {aspects.caster.map(aspect => {
          if(props[aspect]) {
            return (
              <tr key={`aspect-${aspect}`}>
                <Text as='th' variant='label' textAlign='left'>{aspect}</Text>
                <Text as='td' variant='value' pl={2} verticalAlign='top'>{props[aspect]}</Text>
              </tr>
            )
          }
        })}
      </Box>
      <Box as='tbody' mt={3}>
        {aspects.target.map(aspect => {
          if(props[aspect]) {
            return (
              <tr key={`aspect-${aspect}`}>
                <Text as='th' variant='label' textAlign='left'>{aspect.replace('_', ' ')}</Text>
                <Text as='td' variant='value' pl={2} verticalAlign='top'>{props[aspect]}</Text>
              </tr>
            )
          }
        })}
      </Box>
    </Box>
  )
}


export default SpellTable