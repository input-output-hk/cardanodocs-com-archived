import React, { Fragment } from 'react'
import styled from 'styled-components'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import Logo from './Logo'
import { ThemeConsumer } from '../../state'

const Main = styled.main`
  position: relative;
  z-index: 2;
  margin:0rem auto 0;
  width: 100%;
  max-width: ${({ theme }) => theme.dimensions.contentWidth};
  padding: 0 ${({ theme }) => theme.dimensions.contentGutterSize};
`

const MainTitleLogo = styled.div`
  z-index: 2;
`

export default () => (
  <ThemeConsumer>
    {({ theme }) => (
      <Fragment>
        <MobileNavigation className='hide-on-desktop' />
        <Main>
          <MainTitleLogo>
            <Logo />
          </MainTitleLogo>
          <DesktopNavigation className='hide-on-mobile' />
        </Main>
      </Fragment>
    )}
  </ThemeConsumer>
)
