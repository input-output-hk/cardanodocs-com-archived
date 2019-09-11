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
            markdown: allFile(filter:{relativePath:{glob:"content/pages/components/*.md"}}) {
              nodes{
                relativePath,
                childMarkdownRemark{
                  html
                  frontmatter {
                    content {
                      title
                      primary
                      secondary
                      open_modal
                      open_alert
                      alert_dialog {
                        buttons {
                          yes
                          no
                        }
                        title
                        alert_body
                      }
                      components {
                        arrow
                        button
                        select_input
                        loader
                        modal
                        alert
                        grid
                        carousel
                      }
                      modal_content {
                        title
                        modal_body
                      }
                    }
                  }
                }
              }
            }
            placeholder: file(relativePath: {eq: "images/placeholder.png"}) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={({ markdown, placeholder }) => {
          const content = markdown.nodes.filter(node => node.relativePath === `content/pages/components/components-${lang}.md`).shift()
          if (!content) throw new Error(`No content found for components page using language ${lang}`)
          const { frontmatter } = content.childMarkdownRemark
          return render({ frontmatter, placeholder: placeholder.childImageSharp.fluid })
        }}
      />
    )}
  </LanguageConsumer>
)

Query.propTypes = {
  render: PropTypes.func.isRequired
}

export default Query
