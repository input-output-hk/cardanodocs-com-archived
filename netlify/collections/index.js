import footer from './footer'
import header from './header'
import articles from './articles'
import metaData from './metaData'
import pages from './pages'

export default [
  footer,
  header,
  ...articles,
  metaData,
  ...pages
]
