const path = require('path')
const data = require('../data')

function cleanNavigationContext (context) {
  delete context.content
  context.children.forEach(child => {
    cleanNavigationContext(child)
  })

  return context
}

function getContext (article) {
  return JSON.parse(JSON.stringify(article))
}

module.exports = ({ createPage }) => {
  let rootRedirectCreated = false
  const articleTemplate = path.join(__dirname, '../../../src/templates/Article.js')
  const redirectTemplate = path.join(__dirname, '../../../src/templates/Redirect.js')
  function createChildPages (lang, articles, { context = null, basePath = '/' } = {}) {
    articles.forEach((article) => {
      const navigationContext = context || cleanNavigationContext(getContext(article))
      const path = `${basePath}${article.key}/`

      if (article.content) {
        createPage({
          path: `/${lang}${path}`,
          component: articleTemplate,
          context: {
            navigationContext,
            content: article.content
          }
        })

        if (!rootRedirectCreated) {
          createPage({
            path: `/${lang}/`,
            component: redirectTemplate,
            context: {
              to: `/${lang}${path}`
            }
          })

          rootRedirectCreated = true
        }

        if (article.redirects) {
          article.redirects.forEach((redirect) => {
            createPage({
              path: `/${lang}${redirect}`,
              component: redirectTemplate,
              context: {
                to: `/${lang}${path}`
              }
            })
          })
        }
      }

      if (article.children.length > 0) createChildPages(lang, article.children, { context: navigationContext, basePath: path })
    })
  }

  const articles = data.get('articles')
  Object.keys(articles).forEach(lang => {
    createChildPages(lang, articles[lang])
  })
}
