const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const fm = require('front-matter')

const articlesDirectory = path.join(__dirname, 'resources/content/articles')
const articles = {}
fs.readdirSync(articlesDirectory, { encoding: 'utf8' }).forEach((lang) => {
  articles[lang] = []
  fs.readdirSync(path.join(articlesDirectory, lang)).forEach(article => {
    const data = fs.readFileSync(path.join(articlesDirectory, lang, article), { encoding: 'utf8' })
    const content = fm(data)
    const slug = article.replace(new RegExp(`^(.*?)-${lang}\\.md$`), '$1')
    articles[lang].push({
      label: content.attributes.title,
      value: slug
    })
  })
})

process.env.IOHK_ARTICLES = JSON.stringify(articles)

const isProduction = () => process.env.NODE_ENV === 'production'
module.exports = {
  entry: {
    netlify: path.join(__dirname, 'netlify/index.js')
  },
  output: {
    path: path.join(__dirname, 'public/admin'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader'
      }
    ]
  },
  devtool: !isProduction() && 'inline-source-map',
  mode: isProduction() ? 'production' : 'development',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      // Branch exposed by netlify build https://www.netlify.com/docs/continuous-deployment/#environment-variables
      HEAD: 'staging',
      IOHK_ARTICLES: ''
    })
  ]
}
