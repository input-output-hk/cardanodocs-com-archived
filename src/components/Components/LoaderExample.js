import React from 'react'
import Loader from '../Loader'
import styled from 'styled-components'
import Query from './Query'

const SubContainer = styled.div`
  width: 100%;
`

export default () => (
  <Query
    render={({ frontmatter }) => (
      <div className='text-align-center'>
        <h2>{frontmatter.content.components.loader}</h2>
        <SubContainer>
          <Loader />
        </SubContainer>
      </div>
    )}
  />
)
