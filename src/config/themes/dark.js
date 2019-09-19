import IOHKSymbol from '../../../resources/images/dark/iohk-symbol-inverted.png'
import Cardano from '../../../resources/images/dark/card-logo.svg'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default {
  label: 'dark',
  colors: {
    primary: '#131325',
    primaryHighlight: '#4f4f7c',
    subtle: 'rgba(255, 255, 255, 0.1)',
    subtleAccent: 'rgba(255, 255, 255, 0.25)',
    secondary: 'rgba(83, 87, 135, 0.95)',
    interactive: 'rgb(31, 193, 195)',
    interactiveHighlight: 'rgb(63, 224, 226)',
    text: '#ffffff',
    secondaryText: '#afafaf',
    textInverted: '#000000',
    buttonColor: '#ffffff',
    secondaryButtonBackground: '#444444',
    secondaryButtonColor: '#ffffff',
    secondaryButtonBackgroundHighlight: '#555555',
    pageRule: '#36395d',
    alertBackground: '#ffffff',
    alertForeground: '#000000',
    fail: '#eb2256',
    success: '#2cbb69',
    outline: '#4D90FE',
    active: '#ffffff'
  },
  dimensions: {
    contentWidth: '124rem',
    contentGutterSize: '2rem',
    mobileBreakpoint: 800,
    screenSizes: {
      small: 576,
      medium: 768,
      large: 992,
      extraLarge: 1200
    }
  },
  codeTheme: darcula,
  images: {
    IOHKSymbol,
    Cardano,
    Logo: Cardano
  }
}
