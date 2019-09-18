import React from 'react'
import styled from 'styled-components'
import Link from '../Link'
import PropTypes from 'prop-types'

const Container = styled.div`
  width: 100%;
`

const Nav = styled.nav`
  text-transform: uppercase;
`

const NavigationTree = ({ items, path }) => (
  <ul>
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
  </ul>
)

NavigationTree.propTypes = {
  items: PropTypes.array,
  path: PropTypes.string
}

const SideNav = ({ items, path }) => (
  <Container>
    <Nav>
      <NavigationTree items={items} path={path} />
    </Nav>
  </Container>
)

SideNav.propTypes = {
  items: PropTypes.array,
  path: PropTypes.string
}

export default SideNav
