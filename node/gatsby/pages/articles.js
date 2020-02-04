const path = require('path')
const data = require('../data')

function cleanNavigationContext (context) {
  context.isLink = Boolean(context.content)
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
  const articleTemplate = path.join(__dirname, '../../../src/templates/Article.js')
  const redirectTemplate = path.join(__dirname, '../../../src/templates/Redirect.js')
  function createChildPages (lang, articles, { context = null, rootCreated = false } = {}) {
    articles.forEach((article) => {
      const navigationContext = context || cleanNavigationContext(getContext(article))

      if (article.content) {
        if (!rootCreated) {
          createPage({
            path: `/${lang}/`,
            component: articleTemplate,
            context: {
              navigationContext,
              content: article.content
            }
          })

          createPage({
            path: `/${lang}${article.path}`,
            component: redirectTemplate,
            context: {
              to: `/${lang}/`
            }
          })

          rootCreated = true
        } else {
          createPage({
            path: `/${lang}${article.path}`,
            component: articleTemplate,
            context: {
              navigationContext,
              content: article.content
            }
          })
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

      if (article.children.length > 0) createChildPages(lang, article.children, { context: navigationContext, rootCreated })
    })
  }

  const articles = data.get('articles')
  Object.keys(articles).forEach(lang => {
    createChildPages(lang, articles[lang])
  })
}
