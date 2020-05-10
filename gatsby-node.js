const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const spellDetailTemplate = path.resolve(`src/templates/spell-detail.tsx`)
  const result = await graphql(`
    query {
      allSpellFullCsv {
        nodes {
          name
          description
          descriptor
          effect
          duration
          area
          spell_resistance
          id
          short_description
          targets
          saving_throw
          description_formatted
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
        description: node.description,
        descriptor: node.descriptor,
        description_formatted: node.description_formatted,
        effect: node.effect,
        duration: node.duration,
        area: node.area,
        spell_resistance: node.spell_resistance,
        id: node.id,
        short_description: node.short_description,
        targets: node.targets,
        saving_throw: node.saving_throw,
      },
    })
  })
}