import React from 'react'
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

const NavigationTree = ({ items, path }) => (
  <Nav>
    {items.map((item) => (
      <li key={item.key}>
        {item.isLink &&
          <Link
            href={`${path}/${item.key}/`}
            activeClassName='active'
            tracking={{ label: `desktop_navigation_${path}/${item.key}/` }}
            title={item.title}
            partiallyActive
          >
            {item.title}
          </Link>
        }
        {!item.isLink &&
          <p>{item.title}</p>
        }
        {item.children.length > 0 &&
          <NavigationTree items={item.children} path={`${path}/${item.key}`} />
        }
      </li>
    ))}
  </Nav>
)

NavigationTree.propTypes = {
  items: PropTypes.array,
  path: PropTypes.string
}

export default NavigationTree
