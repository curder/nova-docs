module.exports = [
  {
    title: 'Getting Started',
    collapsable: false,
    children: ['installation'],
  },
  {
    title: 'Resources',
    collapsable: false,
    children: prefix('resources', [
      '',
      'fields',
      'date-fields',
      'file-fields',
      'relationships',
      'validation',
    ]),
  },
  {
    title: 'Search',
    collapsable: false,
    children: prefix('search', [
      'global-search',
      'scout-integration',
    ]),
  },
  {
    title: 'Filters',
    collapsable: false,
    children: prefix('filters', [
      'defining-filters',
      'registering-filters',
    ]),
  },
  // {
  //   title: 'Nova JS Reference',
  //   collapsable: false,
  //   children: prefix('nova-js', ['', 'methods', 'properties', 'event-bus']),
  // },
]

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`)
}
