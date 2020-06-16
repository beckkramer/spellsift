const path = require('path')

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
          spell_level
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
        spell_level: node.spell_level,
      },
    })
  })

  const gameTermsResults = await graphql(`
    query {
      gameTerms {
        playerClasses
      }
    }
  `)

  const spellListTemplate = path.resolve(`src/templates/spell-list.tsx`)

  // A full spell list by class
  gameTermsResults.data.gameTerms.playerClasses.forEach(async (_class) => {

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