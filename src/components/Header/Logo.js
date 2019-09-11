import React from 'react'
import styled from 'styled-components'
import { ThemeConsumer } from '../../state'

const LogoImage = styled.img`
  margin: 0 0 1.6rem 0;
  width: 11rem;
`

const Logo = () => (
  <div className='text-align-center'>
    <ThemeConsumer>
      {({ theme }) => (
        <LogoImage src={theme.images.Logo} alt='Logo' />
      )}
    </ThemeConsumer>
    <h2 className='text-transform-uppercase margin-bottom-4 margin-top-1'>IOHK Gatsby <strong>Starter</strong></h2>
  </div>
)

export default Logo
