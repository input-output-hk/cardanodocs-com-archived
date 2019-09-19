import React from 'react'
import styled from 'styled-components'
import { ThemeConsumer } from '../../state'
import Link from '../Link'

const Wrap = styled.div`
display:inline-block;
text-transform:uppercase;

img,strong{
  vertical-align:middle
}
img{
  margin: 2rem 0 0 0;
  width: 2.8rem;
}
strong{
  display:inline-block;
  padding: 2rem 0 0 1rem;
  color: ${({ theme }) => theme.colors.heading};
}
@media screen and (min-width: ${({ theme }) => theme.dimensions.screenSizes.extraLarge}px) {
  float:left;
}
`

const Logo = () => (
  <ThemeConsumer>
    {({ theme }) => (
      <Wrap>
        <Link href='/'>
          <img src={theme.images.Logo} alt='Logo' />
          <strong>Cardano Documentation</strong>
        </Link>
      </Wrap>
    )}
  </ThemeConsumer>
)

export default Logo
