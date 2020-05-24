const path = require('path')
const { PLAYER_CLASSES } = require('constants')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const spellDetailTemplate = path.resolve(`src/templates/spell-detail.tsx`)
  const result = await graphql(`
    query {
      allSpellFullCsv {
        nodes {
          name
          description_formatted,
          descriptor
          effect
          duration
          area
          spell_resistance
          id
          targets
          saving_throw
          source
        }
      }
    }
  `)
  result.data.allSpellFullCsv.nodes.forEach(node => {
    createPage({
      path: `/spells/all/${node.id}`,
      component: spellDetailTemplate,
      context: {
        name: node.name,
        descriptor: node.descriptor,
        description_formatted: node.description_formatted,
        effect: node.effect,
        duration: node.duration,
        area: node.area,
        spell_resistance: node.spell_resistance,
        id: node.id,
        targets: node.targets,
        saving_throw: node.saving_throw,
        source: node.source,
      },
    })
  })

  const classes = [
    'sorcerer',
    'wizard',
    'cleric',
    'druid',
    'ranger',
    'bard',
    'paladin',
    'alchemist',
    'summoner',
    'witch',
    'inquisitor',
    'oracle',
    'antipaladin',
    'magus',
    'bloodrager',
    'shaman',
    'psychic',
    'medium',
    'mesmerist',
    'occultist',
    'spiritualist',
    'skald',
    'investigator',
    'hunter'
  ]

  const spellListTemplate = path.resolve(`src/templates/spell-list.tsx`)

  classes.forEach(async (_class) => {

    const classResult = await graphql(`
      query {
        allSpellFullCsv(filter: {${_class}: {ne: "NULL"}}) {
          nodes {
            name
            descriptor
            effect
            duration
            area
            spell_resistance
            id
            targets
            saving_throw
            short_description
            ${_class}
          }
        }
      }
    `)

    const spellsSortedByLevel = classResult.data.allSpellFullCsv.nodes.sort((a,b) => {
      return Number(a[_class]) - Number(b[_class])
    })
    
    createPage({
      path: `/spells/${_class}`,
      component: spellListTemplate,
      context: {
        class: _class,
        spells: spellsSortedByLevel,
      },
    })
  })
}