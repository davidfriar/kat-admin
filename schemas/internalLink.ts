export default {
  name: 'internalLink',
  title: 'Internal Link',
  type: 'object',
  fields: [
    {
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      to: [{type: 'post'}, {type: 'gallery'}]
    }
  ]
}

