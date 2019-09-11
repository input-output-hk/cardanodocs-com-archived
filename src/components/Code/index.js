import React from 'react'
import PropTypes from 'prop-types'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'

const Code = (props) => (
  <SyntaxHighlighter language={props.language} style={darcula} customStyle={{ padding: '2rem', borderRadius: '0.8rem' }}>
    {props.value}
  </SyntaxHighlighter>
)

Code.propTypes = {
  language: PropTypes.string,
  value: PropTypes.string
}

export default Code
