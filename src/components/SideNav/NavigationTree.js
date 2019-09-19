import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from '../Link'
import { InputNavbar } from '../Search'

const Nav = styled.ul`
  list-style: none;
  padding: 4rem 3rem 0 0;

  li:first-child {
    margin: 0 0 3rem 0;
  }
`

const NavigationTree = ({ items, path }) => (
  <Nav>
    <li className='search-input'>
      <InputNavbar />
    </li>
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
