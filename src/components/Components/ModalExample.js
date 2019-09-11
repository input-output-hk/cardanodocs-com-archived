import React from 'react'
import Modal, { ModalTrigger } from '../Modal'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import Query from './Query'

const SubContainer = styled.div`
  width: 100%;
`

const ModalContent = styled.div`
  padding: 4rem 2rem;
  overflow: scroll;
  box-sizing: border-box;
  max-height: 100%;
`

export default () => (
  <Query
    render={({ frontmatter }) => (
      <div className='text-align-center'>
        <h2>{frontmatter.content.components.modal}</h2>
        <SubContainer>
          <ModalTrigger name='example'>{frontmatter.content.open_modal}</ModalTrigger>
          <Modal name='example'>
            <ModalContent>
              <h2>{frontmatter.content.modal_content.title}</h2>
              <ReactMarkdown source={frontmatter.content.modal_content.modal_body} />
            </ModalContent>
          </Modal>
        </SubContainer>
      </div>
    )}
  />
)
