/* eslint-disable */
import React, { Fragment, PropTypes } from 'react'
import styled from 'styled-components'
import Link from '../Link'
import { Helmet } from 'react-helmet'
import showdown from 'showdown'
import FullWidthSection from '../FullWidthSection'
import { SearchField } from '../Search'
import FlexSearch from 'flexsearch'
import Highlighter from 'react-highlight-words'
import Markdown from '../Markdown'

const Wrapper = styled.div`
  padding: 0 0 6rem 0;
  .content{
    margin-top:3rem;
    width:100%;
    border-left:0.1rem solid ${({ theme }) => theme.colors.subtleAccent};
    @media (min-width: ${({ theme }) => theme.dimensions.mobileBreakpoint}px){
      padding:3rem 0 0 3rem;
    }
    .items{
      list-style-type:none;
      .item+.item{
        border-top:1px solid ${({ theme }) => theme.colors.subtleAccent};
        padding:2rem 0;
      }
      .item{
        margin:0 0 2rem;
        .title{
          font-size:1.6rem;
          text-transform:uppercase;
          span span{
            background: ${({ theme }) => theme.colors.subtleAccent};
          }
        }
        .body{
          font-size:1.2rem;
          line-height:1.7;
          span{
            background: ${({ theme }) => theme.colors.subtleAccent};
          }
        }
      }
    }
  }
  .section-title{
    line-height:1;
    margin:3rem 0;
    font-weight:200;
    color:${({ theme }) => theme.colors.secondaryText};
  }
`

const HeadingWrap = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint}px) {
    justify-content: space-around;
    flex-flow: wrap;
  }
  h1 {
    flex:3;
    
  }
  form {
    flex:1;
  }
  @media (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint}px) {
    h1 {
      text-align:center;
    }
    h1, form {
      flex: 100%;
    }
  }
`

export default class Results extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      results: null
    }
  }

  componentDidMount() {
    this.loadResults()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.query !== this.props.query || !this.state.results) this.loadResults()
  }

  sanitizeContent (content) {
    const converter = new showdown.Converter()
    const htmlContent = converter.makeHtml(content)
    const div = document.createElement('div')
    div.innerHTML = htmlContent.replace(/\n/g, ' ')
    return div.innerText
  }

  loadResults = async () => {
    try {
      const posts = this.props.searchData
      console.log('posts', posts)
      const index = new FlexSearch({
        encode: 'icase',
        tokenize: 'strict',
        threshold: 7,
        depth: 3,
        doc: {
          id: 'path',
          field: [
            'content',
            'title'
          ]
        }
      })
      index.add(posts.map(post => ({
        ...post,
        content: this.sanitizeContent(post.content)
      })))
      console.log('index', index)
      const results = index.search(this.props.query, {
        sort: 'publishTimestampDiff'
      })

      console.log({ results })
      this.setState({ results })
      console.log(this.state.results)
    } catch (err) {
      console.error('Error loading blog search results', err)
    }
  }

  highlightMatch = (text, query, { indexes = [], limit = null, surroundingContext = false } = {}) => {
    const startIndex = indexes[indexes.length - 1]
    const remainingText = text.substring(startIndex === undefined ? 0 : (startIndex + query.length))
    const matchIndex = remainingText.toLowerCase().indexOf(query.toLowerCase())
    if (matchIndex < 0 && indexes.length === 0) {
      return (surroundingContext && text.length > 200)
        ? `${text.substring(0, 500)} ...`
        : text
    }

    if (matchIndex >= 0 && (!limit || indexes.length + 1 <= limit)) return this.highlightMatch(text, query, { indexes: [ ...indexes, startIndex === undefined ? matchIndex : (matchIndex + startIndex + query.length) ], limit, surroundingContext })

    if (surroundingContext) {
      return (
        <Fragment>
          {indexes.map(i => {
            const startIndex = i - 200 + query.length
            let endIndex = i + 300
            if (startIndex < 0) endIndex += Math.abs(startIndex)
            return (
              <p key={`${text}_${query}_${i}`}>
                {startIndex > 0 && '... '}{this.highlightMatch(text.substring(startIndex, endIndex), query)}{endIndex < text.length - query.length + 1 && ' ...'}
              </p>
            )
          })}
        </Fragment>
      )
    } else {
      return (
        <span>
          {indexes.map((i, key) => (
            <Fragment key={`${text}_${query}_${i}`}>
              {text.substring(key === 0 ? 0 : indexes[key - 1] + query.length, i)}<strong>{text.substring(i, i + query.length)}</strong>
            </Fragment>
          ))}
          {text.substring(indexes[indexes.length - 1] + query.length)}
        </span>
      )
    }
  }

  render() {
    return (
      <FullWidthSection>
        <Helmet title={`Searching - Cardano Documentation`} />
        <Wrapper>
          <HeadingWrap>
            <h1 className='section-title'>Search</h1>
            <SearchField initialValue={this.props.query} onSubmit={this.props.onSearch}/>
          </HeadingWrap>
          <div className='content'>
            {this.state.results && this.state.results.length > 0 &&
              <ul className='items'>
                {this.state.results.map( (item, index) => (
                  <li className='item' key={index}>
                    <strong className='title'>
                      <Link href={item.path}>
                        { item.title && <span>{item.title}</span> }
                      </Link>
                    </strong>
                    <div>
                      <Link href={item.path}>
                        <small>{item.path}</small>
                      </Link>
                    </div>
                    <div className='body'>
                      {this.highlightMatch(item.content, this.props.query, { surroundingContext: true, limit: 1 })}
                    </div>
                  </li>
                ))}
              </ul>
            }
            {this.state.results && this.state.results.length === 0 &&
              <div className='empty'><h2>No Results</h2><br /><br /><br /></div >
            }
            {!this.state.results &&
              <p>Initial state</p>
            }
          </div>
        </Wrapper>
      </FullWidthSection>
    )
  }
}
