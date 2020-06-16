
const playerClasses = [
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

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions
  const data = {
    key: 'gameTerms',
    playerClasses,
  }
  const nodeContent = JSON.stringify(data)
  const nodeMeta = {
    id: createNodeId(`data-${data.key}`),
    parent: null,
    children: [],
    internal: {
      type: `gameTerms`,
      mediaType: `text/html`,
      content: nodeContent,
      contentDigest: createContentDigest(data),
    },
  }
  const node = Object.assign({}, data, nodeMeta)
  createNode(node)
}