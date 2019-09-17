import React from 'react'
import PropTypes from 'prop-types'
import Markdown from '../components/Markdown'

const Article = ({ pageContext }) => {
  console.log('Article', pageContext)
  return (
    <Markdown source={pageContext.content} />
  )
}

Article.propTypes = {
  pageContext: PropTypes.shape({
    content: PropTypes.string.isRequired,
    navigationContext: PropTypes.object.isRequired
  }).isRequired
}

export default Article
