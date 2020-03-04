import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from '../Link'

const Nav = styled.ul`
  list-style: none;
  margin:0;
  li {
    padding: 2rem 0;
  }
  p {
    font-weight:600;
  }
  a {
    &.active {
      font-weight:600;
    }
  }
  @media(max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint}px) {
    text-align: center;
    padding:0;
  }
`

const AccordionContainer = styled.div`
  margin-left: 2rem;
`

const Accordion = ({ item: { path, title, children, hasContent }, lang, currentPathname }) => {
  const isActive = () => {
    const fullPath = lang ? `/${lang}${path}` : path
    return currentPathname.substring(0, fullPath.length) === fullPath
  }

  const [expanded, setExpanded] = useState(isActive())

  const onClick = (e) => {
    if (hasContent) return
    e.preventDefault()
    return !isActive() && setExpanded(!expanded)
  }

  return (
    <AccordionContainer>
      <Link activeClassName='active' partiallyActive href={`/${lang}${path}`} onClick={onClick}>
        {title}
      </Link>
      {expanded &&
        <NavigationTree
          items={children}
          path={path}
          lang={lang}
          currentPathname={currentPathname}
          isRoot={false}
        />
      }
    </AccordionContainer>
  )
}

Accordion.propTypes = {
  item: PropTypes.shape({
    children: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    hasContent: PropTypes.bool.isRequired
  }),
  lang: PropTypes.string.isRequired,
  currentPathname: PropTypes.string.isRequired
}

const NavigationTree = ({ items, lang, path, currentPathname }) => {
  return (
    <Nav key={path}>
      {items.map((item) => (
        <li key={item.path}>
          {item.children.length === 0 &&
            <Link
              href={`${item.path}`}
              activeClassName='active'
              tracking={{ label: `desktop_navigation_${item.path}` }}
              title={item.title}
              partiallyActive
            >
              {item.title}
            </Link>
          }

          {item.children.length > 0 &&
            <Accordion
              item={item}
              lang={lang}
              currentPathname={currentPathname}
            />
          }
        </li>
      ))}
    </Nav>
  )
}

NavigationTree.propTypes = {
  items: PropTypes.array.isRequired,
  lang: PropTypes.string.isRequired,
  currentPathname: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default NavigationTree
