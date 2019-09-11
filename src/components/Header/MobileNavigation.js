import React, { useState, Fragment, useEffect } from 'react'
import styled from 'styled-components'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Query from './Query'
import Link from '../Link'
import { MdMenu, MdClose } from 'react-icons/md'
import { addEventListener, removeEventListener, getScrollOffset, scrollTo } from '../../helpers/dom'

const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 4;
  left: 0;
  top: 0;
  
  .toggle-menu {
    position: absolute;
    z-index: 5;
    top: 1rem;
    right: 1rem;
    height: 3.2rem;
    color: ${({ theme }) => theme.colors.interactive};
    font-size: 3.4rem;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 6rem;
  height: 100vh;
  width: 100%;
  position: relative;
  transform: translate(0, 0);
  background-color: ${({ theme }) => theme.colors.secondary};
  z-index: 2;
  width: 100%;
  padding: 0 1rem;
  position: absolute;
  overflow: scroll;

  > ul {
    margin-top: 5rem;
    list-style: none;

    > li {
      margin: 2rem 0;

      &:first-of-type {
        margin-top: 0;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    a {
      flex: 1;
      font-weight: 600;
      letter-spacing: 0.1em;

      &:hover,
      &.active,
      &:focus {
        color: ${({ theme }) => theme.colors.text}
      }
    }
  }

  &.mobileNav-enter {
    transition: transform 0.5s ease-in-out;
    transform: translate(0, -100vh);
  }

  &.mobileNav-leave {
    transition: transform 0.35s ease-in;
    transform: translate(0, 0);
  }

  &.mobileNav-enter-active {
    transform: translate(0, 0);
  }

  &.mobileNav-leave-active {
    transform: translate(0, -100vh);
  }
`

const MobileNavigation = () => {
  const [ scrollPosition, setScrollPosition ] = useState(getScrollOffset())
  const [ mobileNavVisible, setMobileNavVisible ] = useState(false)

  const toggleMobileNav = e => {
    e.preventDefault()
    setMobileNavVisible(!mobileNavVisible)
  }

  const closeNav = e => {
    setMobileNavVisible(false)
  }

  const onScroll = () => {
    if (!mobileNavVisible) setScrollPosition(getScrollOffset())
    if (mobileNavVisible) scrollTo(scrollPosition)
  }

  const addEventListeners = () => {
    addEventListener('touchmove', onScroll)
    addEventListener('scroll', onScroll)
  }

  const removeEventListeners = () => {
    removeEventListener('touchmove', onScroll)
    removeEventListener('scroll', onScroll)
  }

  useEffect(() => {
    removeEventListeners()
    addEventListeners()

    return () => {
      removeEventListeners()
    }
  }, [ mobileNavVisible ])

  return (
    <Container className='text-align-center'>
      <Query
        render={({ navigation }) => (
          <Fragment>
            <Link
              href='/'
              onClick={toggleMobileNav}
              className='toggle-menu'
              tracking={{ label: `mobile_navigation_${mobileNavVisible ? 'close' : 'open'}` }}
            >
              {!mobileNavVisible && <MdMenu />}
              {mobileNavVisible && <MdClose />}
            </Link>
            <ReactCSSTransitionGroup
              transitionName='mobileNav'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={350}
            >
              { mobileNavVisible &&
                <Nav key='nav' className='text-transform-uppercase'>
                  <ul>
                    <li>
                      <Link
                        onClick={closeNav}
                        href='/'
                        activeClassName='active'
                        tracking={{ label: 'mobile_navigation_home' }}
                      >
                        {navigation.labels.home}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={closeNav}
                        href='/features/'
                        activeClassName='active'
                        tracking={{ label: 'mobile_navigation_features' }}
                      >
                        {navigation.labels.features}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={closeNav}
                        href='/documentation/'
                        activeClassName='active'
                        tracking={{ label: 'mobile_navigation_documentation' }}
                      >
                        {navigation.labels.documentation}
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={closeNav}
                        href='/components/'
                        activeClassName='active'
                        tracking={{ label: 'mobile_navigation_components' }}
                      >
                        {navigation.labels.components}
                      </Link>
                    </li>
                  </ul>
                </Nav>
              }
            </ReactCSSTransitionGroup>
          </Fragment>
        )}
      />
    </Container>
  )
}

export default MobileNavigation
