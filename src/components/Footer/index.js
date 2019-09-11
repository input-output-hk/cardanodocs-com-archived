import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import Link from '../Link'
import styled from 'styled-components'
import { ThemeConsumer } from '../../state'
import Query from './Query'
import { DiGithubBadge } from 'react-icons/di'
import { FiTwitter, FiFacebook, FiYoutube, FiRss } from 'react-icons/fi'

const Container = styled.footer`
  width: 100%;
  max-width: ${({ theme }) => theme.dimensions.contentWidth};
  padding: 0 2rem;
  margin: 0 auto;
  display: block;
  letter-spacing: 0.08em;
  margin-top: 15rem;
  margin-bottom: 5rem;

  img {
    margin: 0;
  }
`

const Upper = styled.div`
  display: flex;
  padding-bottom: 2.4rem;
  margin-bottom: 2.4rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.pageRule};

  .copyright {
    color: ${({ theme }) => theme.colors.secondaryText};
    margin: 0;
    margin-top: 0.1rem;
  }

  @media screen and (max-width: 1000px) {
    display: block;
    text-align: center;
  }

  @media screen and (max-width: 570px) {
    text-align: left;
  }
`

const LeftLinksContainer = styled.div`
  flex: 1;

  > a {
    font-size: 3rem;
  }

  > p,
  > a,
  > div {
    display: inline-block;
    vertical-align: middle;
    margin: 0 1.6rem;
  }

  img {
    width: 2.4rem;
  }

  @media screen and (max-width: 570px) {
    .support-links {
      display: block;
      margin: 0;

      > div {
        display: block;
        padding: 0;
        margin-top: 1.2rem;

        &:first-of-type {
          margin-top: 0.2rem;
        }

        &:after {
          display: none;
        }
      }
    }
  }
`

const RightLinksContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;

  > div {
    display: flex;

    .iohk-logo {
      > img,
      > span {
        vertical-align: top;
      }

      > span {
        margin-left: 0.8rem;
        color: ${({ theme }) => theme.colors.secondaryText};
      }

      img {
        width: 3rem;
      }
    }

    .social-media {
      padding-left: 1.6rem;
      display: flex;
      align-items: center;

      a {
        flex: 1;
        padding: 0 0.8rem;
        display: flex;
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.secondaryText};

        svg {
          transition: fill 0.2s ease-in-out;
          fill: ${({ theme }) => theme.colors.secondaryText};
        }

        &:last-of-type,
        &:nth-of-type(3) {
          svg,
          &:hover svg {
            fill: none;
          }
        }

        &:hover {
          color: ${({ theme }) => theme.colors.secondaryText};

          svg {
            fill: ${({ theme }) => theme.colors.secondaryText};
          }
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    align-items: center;
    margin-top: 0.8rem;
  }

  @media screen and (max-width: 570px) {
    align-items: normal;
    margin-top: 1.2rem;

    > div {
      display: block;

      .social-media {
        padding: 0;
        display: block;
        margin-top: 1.2rem;

        > a,
        > a:nth-of-type(3),
        > a:last-of-type {
          display: inline-block;
          margin: 0 1.6rem;

          &:first-of-type {
            margin-left: 0;
          }

          &:last-of-type {
            margin-right: 0;
          }
        }
      }
    }
  }
`

const Lower = styled.div`
  > small {
    display: flex;
  }

  @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
    > small {
      display: block;
    }
  }
`

const Disclaimer = styled.div`
  flex: 1.5;
  margin-right: 1.6rem;

  .body {
    max-width: 60rem;
  }

  @media screen and (max-width: 1000px) {
    flex: 1;

    .body {
      max-width: none;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
    margin-right: 0;
  }
`

const LowerLinksContainer = styled.div`
  flex: 1;
  margin-left: 1.6rem;

  @media screen and (max-width: ${({ theme }) => theme.dimensions.mobileBreakpoint - 1}px) {
    margin-left: 0;
    margin-top: 2.4rem;
  }
`

const LinksColumn = styled.div`
  display: inline-block;
  width: 50%;
  box-sizing: border-box;
  vertical-align: top;

  &.left {
    padding-right: 0.8rem;
  }

  &.right {
    padding-left: 0.8rem;
  }

  ul {
    list-style: none;

    li {
      margin: 0.2rem 0;

      a {
        color: ${({ theme }) => theme.colors.secondaryText};
        transition: color 0.2s ease-in-out;

        &.mail {
          color: ${({ theme }) => theme.colors.interactive};
        }

        &:hover {
          color: ${({ theme }) => theme.colors.interactive};
        }
      }
    }
  }

  @media screen and (max-width: 460px) {
    width: 100%;
    margin-top: 1.6rem;

    &.left {
      padding-right: 0;
    }

    &.right {
      padding-left: 0;
    }

    .title {
      border-bottom: 0.1rem solid ${({ theme }) => theme.colors.pageRule};
      padding-bottom: 1.6rem;
      display: inline-block;
    }

    ul {
      li {
        margin: 0.4rem 0;
      }
    }
  }
`

const CREATION_YEAR = 2015
const getCurrentYear = () => new Date().getFullYear()

const Footer = () => (
  <Container>
    <Query
      render={data => (
        <ThemeConsumer>
          {({ theme }) => (
            <Fragment>
              <Upper className='text-transform-uppercase'>
                <LeftLinksContainer>
                  <p className='copyright'>
                    <small>© IOHK {CREATION_YEAR} - {getCurrentYear()}</small>
                  </p>
                  <Link
                    href='https://github.com/input-output-hk'
                    title='Input Output HK GitHub'
                    target='_blank'
                    tracking={{ label: 'footer_iohk_github' }}
                  >
                    <DiGithubBadge />
                  </Link>
                </LeftLinksContainer>
                <RightLinksContainer>
                  <div>
                    <Link
                      className='iohk-logo'
                      href='https://iohk.io/'
                      target='_blank'
                      tracking={{ label: 'footer_iohk_site' }}
                    >
                      <img src={theme.images.IOHKSymbol} alt='IOHK Logo' /><span>IOHK Supported Project</span>
                    </Link>
                    <div className='social-media'>
                      <Link
                        href='https://twitter.com/inputoutputHK'
                        title='IOHK Twitter'
                        target='_blank'
                        tracking={{ label: 'footer_iohk_twitter' }}
                      >
                        <FiTwitter />
                      </Link>
                      <Link
                        href='https://www.facebook.com/iohk.io/'
                        title='IOHK Facebook'
                        target='_blank'
                        tracking={{ label: 'footer_iohk_facebook' }}
                      >
                        <FiFacebook />
                      </Link>
                      <Link
                        href='http://www.youtube.com/c/IohkIo'
                        title='IOHK YouTube'
                        target='_blank'
                        tracking={{ label: 'footer_iohk_youtube' }}
                      >
                        <FiYoutube />
                      </Link>
                      <Link
                        href='https://iohk.io/blog/'
                        title='IOHK Blog'
                        target='_blank'
                        tracking={{ label: 'footer_iohk_blog' }}
                      >
                        <FiRss />
                      </Link>
                    </div>
                  </div>
                </RightLinksContainer>
              </Upper>
              <Lower>
                <small>
                  <Disclaimer>
                    <ReactMarkdown className='body text-align-justify' source={data.content_body} />
                  </Disclaimer>
                  <LowerLinksContainer>
                    <LinksColumn className='left'>
                      <p className='title sub-title-text'>
                        {data.product_info}
                      </p>
                      <ul>
                        {data.product_links.map((link, index) => (
                          <li key={`${index}${link.href}`}><Link href={link.href} target='_blank' tracking={{ label: `footer_product_${link.href}` }}>{link.label}</Link></li>
                        ))}
                      </ul>
                    </LinksColumn>
                    <LinksColumn className='right'>
                      <p className='title sub-title-text'>
                        {data.community_info}
                      </p>
                      <ul>
                        {data.community_links.map((link, index) => (
                          <li key={`${index}${link.href}`}><Link href={link.href} target='_blank' tracking={{ label: `footer_community_${link.href}` }}>{link.label}</Link></li>
                        ))}
                        <li><Link href={`mailto:${data.community_email}`} tracking={{ label: 'footer_community_email' }} className='mail' target='_blank'>{data.community_email}</Link></li>
                      </ul>
                    </LinksColumn>
                  </LowerLinksContainer>
                </small>
              </Lower>
            </Fragment>
          )}
        </ThemeConsumer>
      )}
    />
  </Container>
)

export default Footer
