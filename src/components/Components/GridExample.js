import React, { useState } from 'react'
import Img from 'gatsby-image'
import { Grid, Row, Column } from '@input-output-hk/react-grid'
import Query from './Query'
import styled from 'styled-components'
import Button from '../Button'

const Container = styled.div`
  .grid-example {
    > div {
      > div {
        outline: 0.1rem solid ${({ theme, showBoundaries }) => showBoundaries ? theme.colors.interactive : 'transparent'};

        .grid-example {
          > div > div {
            outline-color: ${({ theme, showBoundaries }) => showBoundaries ? theme.colors.interactiveHighlight : 'transparent'};
            outline-width: 0.4rem;
          }
        }
      }
    }
  }
`

export default () => {
  const [ showBoundaries, setShowBoundaries ] = useState(false)
  const toggleBoundaries = e => {
    e.preventDefault()
    setShowBoundaries(!showBoundaries)
  }

  return (
    <Container showBoundaries={showBoundaries}>
      <Query
        render={({ frontmatter, placeholder }) => (
          <Grid className='grid-example'>
            <Row spacing={2}>
              <Column className='text-align-center'>
                <Button onClick={toggleBoundaries}>
                  {showBoundaries ? 'Hide boundaries' : 'Show boundaries'}
                </Button>
              </Column>
            </Row>
            <Row spacing={1.2}>
              <Column className='text-align-center'>
                <h2>{frontmatter.content.components.grid}</h2>
              </Column>
            </Row>
            <Row spacing={1.2}>
              <Column>
                <Grid className='grid-example'>
                  <Row sm={1} spacing={2.4} className='text-align-center'>
                    <Column spacing={1}>
                      Smaller column
                    </Column>
                    <Column size={3} spacing={1}>
                      Larger column
                    </Column>
                    <Column spacing={1}>
                      Smaller column
                    </Column>
                  </Row>
                  <Row sm={1} spacing={2.4}>
                    <Column spacing={1}>
                      <Img fluid={placeholder} />
                    </Column>
                    <Column size={2}>
                      <Grid className='grid-example'>
                        <Row md={1} spacing={1}>
                          <Column spacing={1}>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                          </Column>
                          <Column spacing={1}>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet tellus cras adipiscing enim eu turpis egestas. Sodales ut etiam sit amet nisl purus in mollis nunc. Scelerisque viverra mauris in aliquam. Et ultrices neque ornare aenean euismod elementum. Suspendisse faucibus interdum posuere lorem ipsum dolor. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Non curabitur gravida arcu ac tortor. Duis at consectetur lorem donec massa. Malesuada proin libero nunc consequat interdum. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Sapien faucibus et molestie ac feugiat sed lectus. Arcu non sodales neque sodales ut etiam. Et pharetra pharetra massa massa ultricies mi quis. Convallis convallis tellus id interdum velit laoreet id. Tristique senectus et netus et malesuada fames ac turpis. Mi proin sed libero enim sed faucibus turpis. Risus pretium quam vulputate dignissim suspendisse in est.
                            </p>
                          </Column>
                        </Row>
                      </Grid>
                    </Column>
                  </Row>
                </Grid>
              </Column>
            </Row>
            <Row>
              <Column>
                <Grid fillRows spacing={10} className='grid-example'>
                  <Row sm={1} md={2} spacing={10}>
                    <Column spacing={1}>
                      <h3>This is a heading</h3>
                      <Img fluid={placeholder} />
                      <p>Magna pariatur elit deserunt voluptate occaecat qui. Cupidatat non duis mollit aliqua sit esse sit. Pariatur sit ex irure ad dolor qui laboris elit enim non dolore esse magna voluptate. Fugiat labore labore commodo officia minim nisi dolor in esse do dolore excepteur aliqua duis. Labore minim nulla elit exercitation id minim.</p>
                    </Column>
                    <Column spacing={1}>
                      <h3>This is a heading</h3>
                      <Img fluid={placeholder} />
                      <p >Magna pariatur elit deserunt voluptate occaecat qui. Cupidatat non duis mollit aliqua sit esse sit. Pariatur sit ex irure ad dolor qui laboris elit enim non dolore esse magna voluptate. Fugiat labore labore commodo officia minim nisi dolor in esse do dolore excepteur aliqua duis. Labore minim nulla elit exercitation id minim.</p>
                      <p>Magna pariatur elit deserunt voluptate occaecat qui. Cupidatat non duis mollit aliqua sit esse sit. Pariatur sit ex irure ad dolor qui laboris elit enim non dolore esse magna voluptate. Fugiat labore labore commodo officia minim nisi dolor in esse do dolore excepteur aliqua duis. Labore minim nulla elit exercitation id minim.</p>
                      <p>Magna pariatur elit deserunt voluptate occaecat qui. Cupidatat non duis mollit aliqua sit esse sit. Pariatur sit ex irure ad dolor qui laboris elit enim non dolore esse magna voluptate. Fugiat labore labore commodo officia minim nisi dolor in esse do dolore excepteur aliqua duis. Labore minim nulla elit exercitation id minim.</p>
                    </Column>
                    <Column spacing={1}>
                      <h3>This is a heading</h3>
                      <Img fluid={placeholder} />
                      <p>Magna pariatur elit deserunt voluptate occaecat qui. Cupidatat non duis mollit aliqua sit esse sit. Pariatur sit ex irure ad dolor qui laboris elit enim non dolore esse magna voluptate. Fugiat labore labore commodo officia minim nisi dolor in esse do dolore excepteur aliqua duis. Labore minim nulla elit exercitation id minim.</p>
                    </Column>
                  </Row>
                </Grid>
              </Column>
            </Row>
          </Grid>
        )}
      />
    </Container>
  )
}
