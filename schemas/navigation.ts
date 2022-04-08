export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  __experimental_actions: ["update", /* 'create', 'delete', */ "publish"],
  fields: [
    {
      name: 'pages',
      title: 'Pages',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'page'},{type: 'homePage'}]}],
    },
  ],
  preview: {
    prepare: () => {
      return {title: "Navigation"}
    }
  }
}



