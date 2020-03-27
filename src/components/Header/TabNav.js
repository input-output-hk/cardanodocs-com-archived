/* eslint-disable */
import React, { useState, Fragment, forwardRef, createRef } from 'react'
import styled from 'styled-components'
import Query from './Query'
import Link from '../Link'
import PropTypes from 'prop-types'
import { Location } from '@reach/router'
import { navigate } from 'gatsby'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'


function isActive(path, currentPathname) {
  let rootPath = path
    .replace(/^\//, '')
    .replace(/\/$/, '')
    .split('/').slice(0, 2).join('/')

  rootPath = `/${rootPath}/`
  return currentPathname.substring(0, rootPath.length) === rootPath
}

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${labelTransform(index)}`,
    'aria-controls': `scrollable-auto-tabpanel-${labelTransform(index)}`,
  };
}

function labelTransform(label) {
  return label.toLowerCase().replace(/ /g, '-')
}

const TabNav = ({ items }) => {
  const ref = createRef()

  const TabLink = forwardRef((props, ref) => <Link {...props} {...ref}/> )

  return (
    <Location>
      {({ location }) => (
        <Fragment>
          <AppBar 
            position='static' 
            color='default'
            component='div'
          >
            <Tabs
              indicatorColor='primary'
              textColor='primary'
              variant='scrollable'
              scrollButtons='on'
              aria-label='scrollable auto tabs example'
            >
              {items.map(item => (
                <Tab label={item.label} {...a11yProps(item.label)} key={item.path} href={item.path} component={TabLink} className={isActive(item.path, location.pathname) ? 'active' : ''} />
              ))}
            </Tabs>
          </AppBar>
        </Fragment>
      )}
    </Location >
  )

}

TabNav.propTypes = {
  className: PropTypes.string
}

export default TabNav
