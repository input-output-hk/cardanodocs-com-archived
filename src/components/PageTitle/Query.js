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
            allFile(filter:{relativePath:{glob:"resources/content/articles/*/*.md"}}) {
              nodes{
                relativePath,
                childMarkdownRemark{
                  frontmatter {
                    title
                  }
                }
              }
            }
          }
        `}
        render={({ allFile }) => {
          console.log(allFile.nodes)
          // const content = allFile.nodes.filter(node => node.relativePath === `resources/content/articles/${lang}/*.md`).shift()
          // if (!content || !content.childMarkdownRemark) throw new Error(`No header translations found for language ${lang}`)
          // return render(content.childMarkdownRemark.frontmatter)
        }}
      />
    )}
  </LanguageConsumer>
)

Query.propTypes = {
  render: PropTypes.func.isRequired
}

export default Query
