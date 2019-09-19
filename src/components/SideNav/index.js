import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import NavigationTree from './NavigationTree'

const Container = styled.div`
  width: 100%;
`

const Nav = styled.nav`
  text-transform: uppercase;
`

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
