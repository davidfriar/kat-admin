import S from '@sanity/desk-tool/structure-builder'
export default () =>
    S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Posts')
        .child(
          S.documentTypeList('post')
        ),
      S.listItem()
        .title('Galleries')
        .child(
          S.documentTypeList('gallery')
        ),
      S.listItem()
        .title('Pages')
        .child(
          S.documentTypeList('page')
        ),
      S.listItem()
        .title('Home Page')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId("d8d3e2d0-3b77-4991-bd09-67a632a45ea9")
        ),
      S.listItem()
      .title('Settings')
      .child(
        S.list()
          .id('settings')
          .items([
            S.listItem()
              .title('Site Info')
              .child(
                S.document()
                  .schemaType('siteInfo')
                  .documentId('siteInfo'),
              ),
            S.listItem()
              .title('Navigation')
              .child(
                S.document()
                  .schemaType('navigation')
                  .documentId('dd17f8ec-e4a9-41e6-8a6a-d40adcb19646')
              ),
            S.listItem()
              .title('Categories')
              .child(
                S.documentTypeList('category')
              ),
            S.listItem()
              .title('Stickers')
              .child(
                S.documentTypeList('sticker')
              )
          ]
        )
      )
    ]
    )
