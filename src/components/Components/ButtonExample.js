import React, { useState } from 'react'
import Button from '../Button'
import styled from 'styled-components'
import Query from './Query'
import { Grid, Row, Column } from '@input-output-hk/react-grid'

const ButtonContainer = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.dimensions.screenSizes.medium - 1}px) {
    text-align: center;
  }
`

export default () => {
  const [ primaryClickCount, setPrimaryClickCount ] = useState(0)
  const [ secondaryClickCount, setSecondaryClickCount ] = useState(0)
  const [ outlineClickCount, setOutlineClickCount ] = useState(0)
  const onClick = (set, value) => (e) => {
    e.preventDefault()
    set(value + 1)
  }

  return (
    <Query
      render={({ frontmatter }) => (
        <div>
          <h2 className='text-align-center'>{frontmatter.content.components.button}</h2>
          <Grid fillRows>
            <Row sm={1} spacing={1.2}>
              <Column spacing={0.5}>
                <ButtonContainer className='text-align-right'>
                  <Button onClick={onClick(setPrimaryClickCount, primaryClickCount)}>{frontmatter.content.primary} ({primaryClickCount})</Button>
                </ButtonContainer>
              </Column>
              <Column spacing={0.5}>
                <ButtonContainer>
                  <Button type='secondary' onClick={onClick(setSecondaryClickCount, secondaryClickCount)}>{frontmatter.content.secondary} ({secondaryClickCount})</Button>
                </ButtonContainer>
              </Column>
              <Column spacing={0.5}>
                <ButtonContainer>
                  <Button type='outline' onClick={onClick(setOutlineClickCount, outlineClickCount)}>{frontmatter.content.outline} ({outlineClickCount})</Button>
                </ButtonContainer>
              </Column>
            </Row>
          </Grid>
        </div>
      )}
    />
  )
}
