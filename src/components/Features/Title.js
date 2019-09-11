import React, { Fragment } from 'react'
import Query from './Query'

export default () => (
  <Query
    render={({ frontmatter }) => (
      <Fragment>
        <h1>{frontmatter.content.title}</h1>
      </Fragment>
    )}
  />
)
