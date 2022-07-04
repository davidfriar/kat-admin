import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './blockContent'
import category from './category'
import post from './post'
import customImage from './customImage'
import siteInfo from './siteInfo'
import page from './page'
import homePage from './homePage'
import navigation from './navigation'
import gallery from './gallery'
import internalLink from './internalLink'
import sticker from './sticker'
import tiktok from './tiktok'
import playlist from './playlist'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    post,
    page,
    homePage,
    category,
    siteInfo,
    internalLink,
    blockContent,
    customImage,
    navigation,
    gallery,
    sticker,
    tiktok,
    playlist,
  ]),
})
