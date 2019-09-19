import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FullWidthSection from '../../components/FullWidthSection'

const HeadingWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.subtleAccent};
`

const Heading = styled.h1`
  margin:0;
`

const PageTitle = ({ title }) => (
  <HeadingWrap>
    <FullWidthSection>
      <Heading className='text-transform-capitalize padding-bottom-3 padding-top-3'>{title}</Heading>
    </FullWidthSection>
  </HeadingWrap>
)

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default PageTitle
