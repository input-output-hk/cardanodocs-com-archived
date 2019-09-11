import React from 'react'
import ReactMarkdown from 'react-markdown'
import Query from './Query'

export default () => (
  <Query
    render={({ frontmatter }) => (
      <ReactMarkdown source={frontmatter.content.content_body} />
    )}
  />
)
