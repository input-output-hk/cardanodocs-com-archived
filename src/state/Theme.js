import React, { createContext, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import themes from '../config/themes'
import { getLocalStorageValue, setLocalStorageValue } from '../helpers/localStorage'

const ThemeContext = createContext()
const Consumer = ThemeContext.Consumer

function getInitialTheme () {
  const localStorageTheme = getLocalStorageValue('theme')
  return (localStorageTheme && themes[localStorageTheme])
    ? localStorageTheme
    : Object.keys(themes)[0]
}

const Provider = ({ children }) => {
  const [ theme, updateTheme ] = useState(getInitialTheme())

  const setTheme = theme => {
    if (!Object.keys(themes).includes(theme)) throw new Error(`Theme ${theme} does not exist`)
    setLocalStorageValue('theme', theme)
    updateTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{ themeString: theme, theme: themes[theme], setTheme }}>
      <StyledThemeProvider theme={themes[theme]}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.any
}

export {
  Provider,
  Consumer
}
