import React from 'react'
import Blockquote from '../Blockquote'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Link from '../Link'
import Image from '../Image'

const Markdown = (props) => (
  <ReactMarkdown
    {...props}
    renderers={{ link: Link, blockquote: Blockquote, image: Image, ...props.renderers }}
  />
)

Markdown.propTypes = {
  renderers: PropTypes.object
}

export default Markdown
