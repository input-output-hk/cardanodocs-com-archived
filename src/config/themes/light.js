import dark from './dark'
import TinyColor from '@ctrl/tinycolor'
import IOHKSymbol from '../../../resources/images/light/iohk-symbol.png'
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism'

const colors = {}
Object.keys(dark.colors).map(key => {
  const color = new TinyColor(dark.colors[key])
  color.r = 255 - color.r
  color.g = 255 - color.g
  color.b = 255 - color.b
  colors[key] = color.toRgbString()
})

export default {
  label: 'light',
  colors: {
    ...colors,
    primary: '#e5e5e5',
    primaryHighlight: '#c5c5c5',
    alertBackground: '#ffffff',
    alertForeground: '#000000',
    subtle: 'rgba(0, 0, 0, 0.1)',
    subtleAccent: 'rgba(0, 0, 0, 0.25)'
  },
  codeTheme: vs,
  dimensions: { ...dark.dimensions },
  images: {
    IOHKSymbol,
    Logo: IOHKSymbol
  }
}
