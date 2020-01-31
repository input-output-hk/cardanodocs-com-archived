import React from 'react'
import styled from 'styled-components'
import { ThemeConsumer, LanguageConsumer } from '../../state'
import { FiSearch } from 'react-icons/fi'
import { navigate } from 'gatsby'

const Form = styled.form`
  width: 100%;
  display: block;
  @media screen and (max-width: ${({ theme }) => (theme.dimensions.screenSizes.large - 100)}px) {
    min-width:10rem;
    max-width:16rem;
  }
`

const Input = styled.input`
  width: 85%;
  @media screen and (min-width: ${({ theme }) => theme.dimensions.screenSizes.large}px) {
    width: 88%;
  }
  @media screen and (max-width: ${({ theme }) => (theme.dimensions.screenSizes.large - 100)}px) {
    width: 75%;
  }
  border:0.1rem solid ${({ theme }) => theme.colors.secondaryText};
  background:transparent;
  height: 3.8rem;
  padding: 0 2rem;
  border-radius: 1.9rem 0 0 1.9rem;
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.text};
  &:focus{
    background:white;
    color:black;
    outline:none;
  }
`

const Submit = styled.button`
  width:15%;
  @media screen and (min-width: ${({ theme }) => theme.dimensions.screenSizes.large}px) {
    width: 12%;
  }
  @media screen and (max-width: ${({ theme }) => (theme.dimensions.screenSizes.large - 100)}px) {
    width: 25%;
  }
  vertical-align: middle;
  height: 3.8rem;
  border:0.1rem solid ${({ theme }) => theme.colors.secondaryText};
  border-left:0;
  background-color:transparent;
  opacity: ${({ disabled }) => disabled ? 0.4 : 1};
  transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  border-radius: 0 1.9rem 1.9rem 0;
  position: relative;
`

export default class SearchField extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searching: ''
    }
  }

  isSearching = (e) => {
    e.preventDefault()
    this.setState({ searching: e.target.value })
  }

  onSubmit = (value, lang) => {
    navigate('/' + lang + '/search/?s=' + value)
  }

  render () {
    return (
      <LanguageConsumer>
        {({ lang }) => (
          <ThemeConsumer>
            {({ theme }) => (
              <Form
                method='get'
                onSubmit={e => {
                  e.preventDefault()
                  this.onSubmit(this.state.searching, lang)
                }}
              >
                <Input type='text' name='s' placeholder='Search' value={this.state.searching} onChange={this.isSearching} />
                <Submit type='submit'>
                  <FiSearch />
                </Submit>
              </Form>
            )}
          </ThemeConsumer>
        )}
      </LanguageConsumer>
    )
  }
}
