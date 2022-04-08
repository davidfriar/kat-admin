import { Rule } from '@sanity/types';

export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: "The title of your post",
      type: 'string',
      validation: (rule:Rule) => rule.required().error("You must have a title.")
    },
    {
      name: 'subtitle',
      title: 'Subitle',
      description: "A subtitle for your gallery, if you want one",
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      description: "Some more text about your gallery, if you want it",
      type: 'blockContent',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'customImage'}]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: "The end part of the url that will be used by the site",
      validation: (rule:Rule) => rule.required().error("You must have a slug. Just click the 'generate' button and we can fix that for you."),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  ]
}
