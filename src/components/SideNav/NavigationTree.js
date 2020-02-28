import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from '../Link'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

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

const SubNavTree = ({ items, path }) => {
  return items.map((item) => {
    return item.children.length > 0 &&
      <NavigationTree items={item.children} path={`${path}/${item.key}`} />
  })
}

const NavigationTree = ({ items, path }) => {
  const [expanded, setExpanded] = useState(false || 'subNavAccordion')

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
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
            <ExpansionPanel expanded={expanded === 'subNavAccordion'} onChange={handleChange('subNavAccordion')}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1bh-content'
                id='panel1bh-header'
              >
                <Typography>
                  <p>{item.title}</p>
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <SubNavTree items={items} path={path} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          }
        </li>
      ))}
    </Nav>
  )
}

NavigationTree.propTypes = {
  items: PropTypes.array,
  path: PropTypes.string
}

export default NavigationTree
