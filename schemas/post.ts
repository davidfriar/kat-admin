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
      validation: rule => rule.required().error("You must have a title.")
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: "The end part of the url that will be used by the site",
      validation: rule => rule.required().error("You must have a slug. Just click the 'generate' button and we can fix that for you."),
      options: {
        source: 'title',
        maxLength: 96,
      },
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
      validation: rule => rule.required().error("You can't publish this post without setting the publication date.")
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      body: 'body',
    },
    prepare(selection) {
      const asset = selection.body?.find(block => block._type === 'customImage')?.asset;
      return {title: selection.title, media: asset}
    },
  },
}
