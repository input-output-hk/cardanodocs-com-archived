import React from 'react'
import Query from './Query'
import Markdown from '../Markdown'

export default () => (
  <Query
    render={({ docs }) => (
      <Markdown source={docs} escapeHtml={false} />
    )}
  />
)
