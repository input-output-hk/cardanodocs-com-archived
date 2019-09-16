import React from 'react'
import styled from 'styled-components'
import Query from './Query'
import Link from '../Link'
import PropTypes from 'prop-types'
import { getURIPathWithoutLang } from '../../helpers/url'
import { LanguageConsumer } from '../../state'
import { InputNavbar } from '../Search'

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
    margin:0;
    li+li{
      border-left:.1rem solid ${({ theme }) => theme.colors.accent};
      &.search-input{
        border:0;
      }
    }
    > li {
      margin: 0;
      display: inline-block;
      position: relative;
      a{
        padding:2rem;
        display: inline-block;
      }
      &.active a{
        color: ${({ theme }) => theme.colors.text};
        background: ${({ theme }) => theme.colors.accent};
      }
    }
  }
`

const isActive = (lang, href) => {
  const uri = getURIPathWithoutLang(lang)
  return (uri.substr(0, href.length) === href) ? 'active' : ''
}

const DesktopNavigation = ({ className }) => (
  <LanguageConsumer>
    {({ lang }) => (
      <Container className={`text-align-right ${className}`}>
        <Query
          render={({ navigation }) => (
            <Nav className='text-transform-uppercase'>
              <ul>
                {navigation.items.map((item, index) => (
                  <li className={isActive(lang, item.href)}>
                    <Link
                      href={item.href}
                      activeClassName='active'
                      tracking={{ label: 'desktop_navigation_' + item.slug }}
                      title={item.title}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className='search-input'>
                  <InputNavbar />
                </li>
              </ul>
            </Nav>
          )}
        />
      </Container>
    )}
  </LanguageConsumer>
)

DesktopNavigation.propTypes = {
  className: PropTypes.string
}

export default DesktopNavigation
