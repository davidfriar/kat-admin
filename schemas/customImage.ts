import Unsplash from 'part:sanity-plugin-asset-source-unsplash/image-asset-source'

export default {
  name: "customImage",
  title: "Image",
  type: "image",
  fields: [
    {
      name: "alt",
      title: "Alt",
      type: "string",
      validation: Rule => Rule.required().error("Images must have an Alt tag to make them accessible"),
      options: {
        isHighlighted: true
      }
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: false
      }
    },
    {
      name: 'sticker',
      title: 'Sticker',
      type: 'reference',
      to: {type: 'sticker'},
    },
  ],
  options: {hotspot: true},
  sources: [
    Unsplash
  ],
  preview: {
    select: {
      media: "asset",
      title: "alt",
      subtitle: "caption"
    },
  }
}
