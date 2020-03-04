import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from '../Link'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { navigate } from 'gatsby'

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

const Accordion = ({ item: { path, title, children, hasContent }, lang, currentPathname }) => {
  const isActive = () => {
    const fullPath = lang ? `/${lang}${path}` : path
    return currentPathname.substring(0, fullPath.length) === fullPath
  }

  const [expanded, setExpanded] = useState(isActive())

  const handleChange = (_, isExpanded) => {
    if (hasContent) return navigate(`/${lang}${path}`)
    return !isActive() && setExpanded(isExpanded)
  }

  return (
    <ExpansionPanel expanded={expanded} onChange={handleChange}>
      <ExpansionPanelSummary
        expandIcon={isActive() ? <span /> : <ExpandMoreIcon />}
        aria-controls='panel1bh-content'
        id='panel1bh-header'
      >
        <div>{title}</div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <NavigationTree
          items={children}
          path={path}
          lang={lang}
          currentPathname={currentPathname}
          isRoot={false}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
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
