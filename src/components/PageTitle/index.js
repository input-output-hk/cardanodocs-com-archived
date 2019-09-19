import React from 'react'
import Query from './Query'
import styled from 'styled-components'

const Heading = styled.h1`

`

export default () => (
  <Query
    render={({ title }) => (
      <Heading className='text-transform-capitalize text-align-center margin-bottom-4 margin-top-1'>foo</Heading>
    )}
  />
)
