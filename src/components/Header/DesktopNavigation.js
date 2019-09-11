import React from 'react'
import styled from 'styled-components'
import Query from './Query'
import Link from '../Link'

const Container = styled.div`
  width: 100%;
`

const Nav = styled.nav`
  width: 100%;
  margin: 0 auto;

  a {
    font-weight: 600;
    letter-spacing: 0.1em;

    &:hover,
    &.active,
    &:focus {
      color: ${({ theme }) => theme.colors.text}
    }
  }

  > ul {
    > li {
      margin: 0;
      display: inline-block;
      padding: 0 1rem;
      position: relative;
    }
  }
`

const DesktopNavigation = () => (
  <Container className='text-align-center'>
    <Query
      render={({ navigation }) => (
        <Nav className='text-transform-uppercase'>
          <ul>
            <li>
              <Link
                href='/'
                activeClassName='active'
                tracking={{ label: 'desktop_navigation_home' }}
              >
                {navigation.labels.home}
              </Link>
            </li>
            <li>
              <Link
                href='/features/'
                activeClassName='active'
                tracking={{ label: 'desktop_navigation_features' }}
              >
                {navigation.labels.features}
              </Link>
            </li>
            <li>
              <Link
                href='/documentation/'
                activeClassName='active'
                tracking={{ label: 'desktop_navigation_documentation' }}
              >
                {navigation.labels.documentation}
              </Link>
            </li>
            <li>
              <Link
                href='/components/'
                activeClassName='active'
                tracking={{ label: 'desktop_navigation_components' }}
              >
                {navigation.labels.components}
              </Link>
            </li>
          </ul>
        </Nav>
      )}
    />
  </Container>
)

export default DesktopNavigation
