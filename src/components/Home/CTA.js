import React, { Fragment } from 'react'
import Query from './Query'
import Button from '../Button'
import styled from 'styled-components'

const Container = styled.div`
  display: inline-block;
  width: 50%;
  padding: 0 1rem;
  box-sizing: border-box;

  @media screen and (max-width: 600px) {
    display: block;
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
`

export default () => (
  <Query
    render={({ frontmatter }) => (
      <Fragment>
        <Container className='text-align-right'>
          <Button href='/documentation/' tracking={{ label: 'home_page_features_getting_started' }}>{frontmatter.content.getting_started_cta}</Button>
        </Container>
        <Container>
          <Button href='/features/' type='secondary' tracking={{ label: 'home_page_features_cta' }}>{frontmatter.content.features_cta}</Button>
        </Container>
      </Fragment>
    )}
  />
)
