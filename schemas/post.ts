import { Rule } from '@sanity/types';

export default {
  name: 'post',
  title: 'Post',
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
      description: "A subtitle for your post, if you want one",
      type: 'string',
    },
    {
      name: 'summary',
      title: 'Summary',
      description: "A short summary that will be used in listings.",
      type: 'text',
      rows: 2,
      validation: (rule:Rule) => rule.required().error("You need to have a summary.")
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
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
    {
      name: 'mainImage',
      title: 'Main Image',
      description: "The image to be used when this post is shown in a listing (probably pick one of the images that you used in the body of the post",
      type: 'customImage',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (rule:Rule) => rule.required().error("You can't publish this post without setting the publication date.")
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage'
    },
  },
}
