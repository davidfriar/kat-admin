import Preview from '../components/playlistPreview'
export default {
  name: "playlist",
  title: "Playlist",
  type: "object",
  fields: [
    {
      name: "url",
      title: "url",
      type: "string",
      validation: rule => rule.required().error("must have a url"),
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: Preview
  },
}


