import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { LanguageConsumer } from '../../state'

const Query = ({ render }) => (
  <LanguageConsumer>
    {({ lang }) => (
      <StaticQuery
        query={graphql`
          query{
            pageContent: allFile(filter:{relativePath:{glob:"content/pages/documentation/*.md"}}) {
              nodes{
                relativePath,
                childMarkdownRemark{
                  frontmatter {
                    content {
                      title
                    }
                  }
                }
              }
            }
            docsContent: file(relativePath: {eq: "content/docs/getting-started.md"}) {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
          }
        `}
        render={({ pageContent, docsContent }) => {
          const content = pageContent.nodes.filter(node => node.relativePath === `content/pages/documentation/documentation-${lang}.md`).shift()
          if (!content) throw new Error(`No content found for getting started page using language ${lang}`)
          return render({ ...content.childMarkdownRemark, docs: docsContent.childMarkdownRemark.rawMarkdownBody })
        }}
      />
    )}
  </LanguageConsumer>
)

Query.propTypes = {
  render: PropTypes.func.isRequired
}

export default Query
