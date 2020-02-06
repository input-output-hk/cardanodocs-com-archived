import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import DesktopNavigation from '../components/Header/DesktopNavigation'
import FullWidthSection from '../components/FullWidthSection'
import styled from 'styled-components'
import { LanguageConsumer } from '../state'

const HeadingWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.subtleAccent};
`

const NavWrap = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin: 3rem 0;
  }
  @media (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint}px) {
    flex-flow: wrap;
    > div {
      display: none;
    }
  }
`

const Title = styled.div`
  h1 {
    span {
      margin: 0 0.4rem;
      position: relative;
    }
  }
`

const Info = styled.div`
  padding: 3rem 0;
  ${({ theme }) => theme.colors.secondaryText};
`

const Query = ({ render }) => (
  <LanguageConsumer>
    {({ lang }) => (
      <StaticQuery
        query={graphql`
          query {
            allFile(filter:{relativePath:{glob:"content/pages/home/*.md"}}) {
              nodes {
                relativePath
                childMarkdownRemark {
                  frontmatter {
                    content {
                      title
                      description
                      subtitle
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allFile }) => {
          const content = allFile.nodes.filter(node => node.relativePath === `content/pages/home/home-${lang}.md`).shift()
          if (!content) throw new Error(`No content found for Home page using language ${lang}`)
          return render(content.childMarkdownRemark)
        }}
      />
    )}
  </LanguageConsumer>
)

Query.propTypes = {
  render: PropTypes.func.isRequired
}

export default () => (
  <Fragment>
    <Query
      render={({ frontmatter }) => (
        <Fragment>
          <HeadingWrap>
            <FullWidthSection>
              <NavWrap>
                <Title>
                  <h1>
                    <span data-text={frontmatter.content.title.toUpperCase()}>{frontmatter.content.title.toUpperCase()}</span>
                  </h1>
                </Title>
                <DesktopNavigation />
              </NavWrap>
            </FullWidthSection>
          </HeadingWrap>
          <FullWidthSection>
            <Info>
              <h2>{frontmatter.content.subtitle}</h2>
              {frontmatter.content.description}
            </Info>
          </FullWidthSection>
        </Fragment>
      )}
    />
  </Fragment>
)
