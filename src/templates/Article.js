import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Markdown from '../components/Markdown'
import FullWidthSection from '../components/FullWidthSection'
import SideNav from '../components/SideNav'

const NavCol = styled.nav`
  flex: 1;
`
const ContentCol = styled.article`
  flex: 3;
`

const ContentWrap = styled.main`
  display: flex;
`

const Article = ({ pageContext }) => {
  console.log('Article', pageContext)
  return (
    <Fragment>
      <FullWidthSection>
        <ContentWrap>
          {pageContext.navigationContext.children.length > 0 &&
            <NavCol>
              <SideNav items={pageContext.navigationContext.children} path={`/${pageContext.navigationContext.key}`} />
            </NavCol>
          }
          <ContentCol>
            <Markdown source={pageContext.content} />
          </ContentCol>
        </ContentWrap>
      </FullWidthSection>
    </Fragment>
  )
}

Article.propTypes = {
  pageContext: PropTypes.shape({
    content: PropTypes.string.isRequired,
    navigationContext: PropTypes.object.isRequired
  }).isRequired
}

export default Article
