import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

export const query = graphql`
  query($lang:String) {
    allCardanoDocsArticle(filter: {lang: {eq: $lang}}) {
      edges {
        node {
          title
          path
          lang
          content
        }
      }
    }
  }
`

const SearchPage = ({ data, pageContext }) => (
  <div>Total documentation articles for {pageContext.lang} - {data.allCardanoDocsArticle.edges.length}</div>
)

SearchPage.propTypes = {
  pageContext: PropTypes.shape({
    lang: PropTypes.string.isRequired
  }).isRequired,
  data: PropTypes.object
}

export default SearchPage
