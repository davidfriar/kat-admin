import { Rule } from '@sanity/types';

export default {
  name: 'sticker',
  title: 'Sticker',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'A name for this sticker',
      type: 'string',
      validation: (rule:Rule) => rule.required().error("You must have a name for the sticker.")
    },
    {
      name: 'image',
      title: 'Image',
      description: 'An image for this sticker',
      type: 'customImage',
      validation: (rule:Rule) => rule.required().error("You must have an image for the sticker.")
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'An optional short block of text which will appear as a popup when the user mouses over the sticker'
    },
    {
      name: 'link',
      title: 'Link',
      description: 'An (optional) link for this sticker',
      type: 'url',
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    },
  },
}
