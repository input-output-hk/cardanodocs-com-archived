import React from 'react'
import Layout from '../components/Layout'
import {
  AlertExample,
  ArrowExample,
  ButtonExample,
  CarouselExample,
  GridExample,
  LoaderExample,
  ModalExample,
  SelectInputExample,
  Title
} from '../components/Components'
import { Grid, Row, Column } from '@input-output-hk/react-grid'
import FullWidthSection from '../components/FullWidthSection'

export default () => (
  <Layout>
    <Title />
    <div>
      <Grid fillRows>
        <Row xl={2} md={1} spacing={8}>
          <Column>
            <AlertExample />
          </Column>
          <Column>
            <ArrowExample />
          </Column>
          <Column>
            <ButtonExample />
          </Column>
          <Column>
            <LoaderExample />
          </Column>
          <Column>
            <ModalExample />
          </Column>
          <Column>
            <SelectInputExample />
          </Column>
        </Row>
      </Grid>
      <FullWidthSection>
        <Grid>
          <Row>
            <Column>
              <GridExample />
            </Column>
          </Row>
          <Row>
            <Column className='max-width-100'>
              <CarouselExample />
            </Column>
          </Row>
        </Grid>
      </FullWidthSection>
    </div>
  </Layout>
)
