import S from '@sanity/desk-tool/structure-builder'
export default () =>
    S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(listItem =>  !['siteInfo', 'media.tag'].includes(listItem.getId())),
      S.listItem()
      .title('Site Info')
      .child(
        S.document()
          .schemaType('siteInfo')
          .documentId('siteInfo')
      )
    ]
    )
