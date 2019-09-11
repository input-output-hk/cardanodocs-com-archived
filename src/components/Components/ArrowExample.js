import React from 'react'
import Arrow from '../Arrow'
import styled from 'styled-components'
import Query from './Query'
import { Grid, Row, Column } from '@input-output-hk/react-grid'

const Container = styled.div`
  color: ${({ theme }) => theme.colors.interactive};
  width: 100%;
  font-size: 3rem;

  @media screen and (max-width: 400px) {
    font-size: 2.2rem;
  }
`

const Title = styled.div`
  color: ${({ theme }) => theme.colors.text};
`

export default () => (
  <Query
    render={({ frontmatter }) => (
      <Container className='text-align-center'>
        <Title>
          <h2>{frontmatter.content.components.arrow}</h2>
        </Title>
        <Grid fillRows>
          <Row xl={4} xs={2}>
            <Column><Arrow up /></Column>
            <Column><Arrow down /></Column>
            <Column><Arrow left /></Column>
            <Column><Arrow right /></Column>
            <Column><Arrow up fill /></Column>
            <Column><Arrow down fill /></Column>
            <Column><Arrow left fill /></Column>
            <Column><Arrow right fill /></Column>
          </Row>
        </Grid>
      </Container>
    )}
  />
)
