import React, { Fragment } from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import Logo from './Logo'
import { ThemeConsumer } from '../../state'

const Container = styled.header`
  width: 100%;
  position: relative;
  margin: 10rem 0 12rem;
`

const MainTitleLogo = styled.div`
  z-index: 2;
`

export default () => (
  <ThemeConsumer>
    {({ theme }) => (
      <Fragment>
        <MediaQuery query={`(max-width: ${theme.dimensions.mobileBreakpoint - 1}px)`}>
          <MobileNavigation />
        </MediaQuery>
        <Container>
          <MainTitleLogo>
            <Logo />
          </MainTitleLogo>
          <MediaQuery query={`(min-width: ${theme.dimensions.mobileBreakpoint}px)`}>
            <DesktopNavigation />
          </MediaQuery>
        </Container>
      </Fragment>
    )}
  </ThemeConsumer>
)
