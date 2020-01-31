import React from 'react'
import Query from './Query'
import styled from 'styled-components'
import Link from '../Link'
import { Helmet } from 'react-helmet'
import FullWidthSection from '../FullWidthSection'
import { Input } from '../Search'
import { LanguageConsumer } from '../../state'
import { getSearch } from '../../helpers/url'
import { navigate } from 'gatsby'

const Wrapper = styled.div`
padding:4rem 0;
@media (min-width: ${({ theme }) => theme.dimensions.mobileBreakpoint}px){
  max-width:80%;
}
.content{
  width:100%;
  border-left:0.1rem solid ${({ theme }) => theme.colors.accent};
  @media (min-width: ${({ theme }) => theme.dimensions.mobileBreakpoint}px){
    padding:3rem 0 0 3rem;
  }
  .items{
    list-style-type:none;
    .item+.item{
      border-top:0.1rem solid ${({ theme }) => theme.colors.accent};
      padding:2rem 0;
    }
    .item{
      margin:0 0 2rem;
      .title{
        font-size:1.6rem;
        text-transform:uppercase;
        span span{
          background:yellow
        }
      }
      .body{
        font-size:1.2rem;
        line-height:1.7;
        span{
          background:yellow
        }
      }
    }
  }
}
.section-title{
  font-size:4.35rem;
  line-height:1;
  margin:0;
  padding:0 0 4rem 0;
  font-weight:200;
  color:${({ theme }) => theme.colors.secondaryText};
  img{
    height:4rem;
    width:auto;
    float:right;
  }
}
`

export default class Results extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searching: ''
    }
  }

  componentDidMount = () => {
    const params = getSearch()
    if (params.substring(0, 3) === '?s=') {
      this.setState({ searching: params.substring(3, params.length) })
    }
  }

  isSearching = (e) => {
    e.preventDefault()
    this.setState({ searching: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    navigate('/search/?=' + e.target.value)
  }

  getSearchSpan = (content, match, trim) => {
    const regex = /(<([^>]+)>)/ig
    content = content.replace(regex, '')

    let out = false
    const found = content.toLowerCase().search(match.toLowerCase())
    if (found !== -1) {
      if (trim) {
        const trimStart = (found > trim)
        const trimEnd = (found + match.length + trim < content.length)
        out =
          content.substring((trimStart) ? found - trim : 0, found) +
          '<span>' + content.substring(found, found + match.length) + '</span>' +
          content.substring(found + match.length, (trimEnd) ? (found + match.length + trim) : content.length)
        out = ((trimStart) ? '...' : '') + out + ((trimEnd) ? '...' : '')
      } else {
        out =
          content.substring(0, found) +
          '<span>' + content.substring(found, found + match.length) + '</span>' +
          content.substring(found + match.length, content.length)
      }
    }
    return out
  }

  getSearchResults = (content) => {
    let out = []
    for (let i = 0; i < content.length; i++) {
      const searchTitle = this.getSearchSpan(content[i].childMarkdownRemark.frontmatter.title, this.state.searching, false)
      const searchBody = this.getSearchSpan(content[i].childMarkdownRemark.html, this.state.searching, 200)
      if (searchTitle || searchBody) {
        content[i].result = {}
        if (searchTitle) {
          content[i].result.title = searchTitle
        }
        if (searchBody) {
          content[i].result.body = searchBody
        }
        out.push(content[i])
      }
    }
    return out
  }

  getLink = (path, lang) => {
    let out = path.substring(23, path.length - (lang.length + 4))
    if (out.substring(out.length - 5, out.length) === 'index') {
      out = out.substring(0, out.length - 6)
    }
    return out + '/'
  }

  render () {
    return (
      <LanguageConsumer>
        {({ lang }) => (
          <Query
            render={({ frontmatter }) => (
              <FullWidthSection>
                <Helmet title={`Searching - Cardano Documentation`} />
                <Wrapper>
                  <h3 className='section-title'>Search</h3>
                  <Input value={this.state.searching} label='Type to search ...' submitLabel='Search' onChange={this.isSearching} />
                  <div className='content'>
                    {(this.state.searching !== '')
                      ? <ul className='items'>
                        {this.getSearchResults(frontmatter).map((item, index) => (
                          <li className='item' key={index}>
                            <strong className='title'>
                              <Link href={this.getLink(item.relativePath, lang)}>
                                {(item.result && item.result.title)
                                  ? <span dangerouslySetInnerHTML={{ __html: item.result.title }} />
                                  : <span>{item.childMarkdownRemark.frontmatter.title}</span>
                                }
                              </Link>
                            </strong>
                            <div><Link href={this.getLink(item.relativePath, lang)}><small>{this.getLink(item.relativePath, lang)}</small></Link></div>
                            <div className='body'>
                              {(item.result && item.result.body)
                                ? <div dangerouslySetInnerHTML={{ __html: item.result.body }} />
                                : <div dangerouslySetInnerHTML={{ __html: item.childMarkdownRemark.html }} />
                              }
                            </div>
                          </li>
                        ))}
                      </ul>
                      : <div className='empty'><h2>No search criteria</h2><br /><br /><br /></div >
                    }

                  </div>
                </Wrapper>
              </FullWidthSection>
            )}
          />
        )}
      </LanguageConsumer>
    )
  }
}
