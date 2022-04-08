import { Rule } from '@sanity/types';


export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule:Rule) => rule.required().error("Your page needs a title"),
    },
    {
      name: 'navigationTitle',
      title: 'Navigation Title',
      type: 'string',
      description: "This is an optional alternative title to use in the navigation menu. If you don't put anything here we'll just use the title"
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'This is optional'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'customImage',
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
      name: 'pageType',
      title: 'Page Type',
      description: "What kind of page is this? A category page shows a list of posts, and you can choose to filter the list to only show posts from particular categories. A gallery list page shows a list of photo galleries. A simple page is just page.",
      type: 'string',
      validation: (rule:Rule) => rule.required().error("You need to choose a page type"),
      options: {
        list: [
          { title: 'Category Page', value: 'categoryPage'},
          { title: 'Gallery List Page', value: 'galleryListPage'},
          { title: 'Simple Page', value: 'simplePage'},
        ],
        layout: 'radio'
      },

    },
    {
      name: 'categories',
      title: 'Categories',
      description: 'Only show posts that have been tagged with these categories.',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      hidden: ({document}) => document.pageType != 'categoryPage'
    },
    {
      name: 'template',
      title: 'Template',
      description: 'Choose one of these templates for displaying the list of posts',
      type: 'string',
      hidden: ({document}) => document.pageType != 'categoryPage',
      validation: (rule:Rule) => rule.custom((template, context) => {
        if(context.document.pageType == 'categoryPage') {
           return template ? true : "This is a category page, so you must choose a template to display the list of posts"
        }
        else {
          return true
        }
      }),
      options: {
        list: [
          {title: 'Coverflow', value: 'coverflow'},
          {title: 'Card List', value: 'cardlist'},
          {title: 'Grid', value: 'grid'},
          {title: 'Gig', value: "gig" },
        ],
        layout: 'radio'
      }
    },
  ],
}

