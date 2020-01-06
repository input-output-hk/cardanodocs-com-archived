import React, { Fragment } from 'react'
import styled from 'styled-components'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import Logo from './Logo'
import { ThemeConsumer } from '../../state'
import { Typography } from '@material-ui/core'

const Header = styled.header`
  position: relative;
  z-index: 2;
  margin: 0rem auto 0;
  width: 100%;
  max-width: ${({ theme }) => theme.dimensions.contentWidth};
  padding: 0 ${({ theme }) => theme.dimensions.contentGutterSize};
  display:flex;
`

const NavWrap = styled.div`
  flex: 3;
`

const HeaderTitleLogo = styled.div`
  flex:1;
  z-index: 2;
  flex-direction:row;
`

export default () => (
  <ThemeConsumer>
    {({ theme }) => (
      <Fragment>
        <MobileNavigation className='hide-on-desktop' />
        <Header>
          <HeaderTitleLogo>
            <Logo />
            <Typography variant='h4' color='primary'>Material-UI Version</Typography>
          </HeaderTitleLogo>
          <NavWrap>
            <DesktopNavigation className='hide-on-mobile' />
          </NavWrap>
        </Header>
      </Fragment>
    )}
  </ThemeConsumer>
)
