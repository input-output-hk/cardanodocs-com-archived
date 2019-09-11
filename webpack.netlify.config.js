const webpack = require('webpack')
const path = require('path')

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
      HEAD: 'staging'
    })
  ]
}
