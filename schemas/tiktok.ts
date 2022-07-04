import Preview from '../components/tiktokPreview'
export default {
  name: "tiktok",
  title: "Tiktok",
  type: "object",
  fields: [
    {
      name: "url",
      title: "Url",
      type: "string",
      validation: Rule => Rule.required().error("Must have a url"),
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: Preview
  },
}


