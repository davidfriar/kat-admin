export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
   __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'customImage',
    }

  ],
}


