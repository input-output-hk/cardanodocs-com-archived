import React from 'react'
import Query from './Query'

export default () => (
  <Query
    render={({ frontmatter }) => (
      <h1 className='introduction'>{frontmatter.content.title}</h1>
    )}
  />
)
