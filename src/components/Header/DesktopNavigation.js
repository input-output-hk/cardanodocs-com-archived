/* eslint-disable */
import React, { useState, useEffect, Fragment, forwardRef, createRef } from 'react'
import styled from 'styled-components'
import Query from './Query'
import Link from '../Link'
import PropTypes from 'prop-types'
import { Location } from '@reach/router'
import { navigate } from 'gatsby'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const Container = styled.div`
  max-width: 100vw;
  /* flex: 2;
  display: flex;
  justify-content: flex-start;
  @media (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint}px) {
    flex: 1 100%;
  } */
`

const Nav = styled(Container)`
  div {
    background:none;
    box-shadow:none;
  }
  /* .MuiTabs-scrollButtons {
    position:absolute;
    height:48px;
    z-index:1;
    background: ${({ theme }) => theme.colors.interactiveHighlight};
  } */
  a {
    font-weight: 600;
    letter-spacing: 0.1em;
    position:relative;
      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.interactiveHighlight};
        background: ${({ background, theme }) =>
    background || theme.colors.subtle}
      }
      &.active:after {
        position:absolute;
        content: ' ';
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        background: ${({ theme }) => theme.colors.interactiveHighlight};
        height:4px;
        width: 50%;
        bottom:0;
        left:25%;
        opacity: 0.5;
      }
    }
  > ul {
    margin: 0;

    > li {
      margin: 0;
      display: inline-block;
      position: relative;
      a {
        padding: 2rem;
        display: inline-block;

        &.active {
          color: ${({ theme }) => theme.colors.text};
        }
      }
    }
  }
`

function isActive(path, currentPathname) {
  let rootPath = path
    .replace(/^\//, '')
    .replace(/\/$/, '')
    .split('/').slice(0, 2).join('/')

  rootPath = `/${rootPath}/`
  return currentPathname.substring(0, rootPath.length) === rootPath
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${labelTransform(index)}`,
    'aria-controls': `scrollable-auto-tabpanel-${labelTransform(index)}`,
  };
}

function labelTransform(label) {
  return label.toLowerCase().replace(/ /g, '-')
}

const DesktopNavigation = ({ className, label }) => {
  const ref = createRef()

  const TabLink = forwardRef((props, ref) => <Link {...props} {...ref}/> )

  return (
    <Location>
      {({ location }) => (
        <Fragment>
          <Nav>
            <Query
              render={items => (
                <AppBar 
                  position='static' 
                  color='default'
                  component='div'
                >
                  <Tabs
                    indicatorColor='primary'
                    textColor='primary'
                    variant='scrollable'
                    scrollButtons='on'
                    aria-label='scrollable auto tabs example'
                  >
                    {items.map(item => (
                      <Tab label={item.label} {...a11yProps(item.label)} key={item.path} href={item.path} component={TabLink} className={isActive(item.path, location.pathname) ? 'active' : ''} />
                    ))}
                  </Tabs>
                </AppBar>
              )}
            />
          </Nav>
        </Fragment>
      )
      }
    </Location >
  )

}

DesktopNavigation.propTypes = {
  className: PropTypes.string
}

export default DesktopNavigation
