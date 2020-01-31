import React from 'react'
import Link from '../Link'
import Markdown from '../Markdown'
import styled from 'styled-components'
import { ThemeConsumer, LanguageConsumer } from '../../state'
import Query from './Query'
import { DiGithubBadge } from 'react-icons/di'
import { FiTwitter, FiFacebook, FiYoutube, FiRss } from 'react-icons/fi'
import { Typography, Grid, Box, Container, List, ListItem, ListItemText, ListSubheader } from '@material-ui/core'

const FooterContainer = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 2rem;
  margin: 0 auto;
  display: block;
  letter-spacing: 0.08em;
  margin-top: 0rem;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;

  img {
    margin: 0;
  }
`

const Upper = styled.div`
  display: flex;
  padding-top: 2.4rem;

  .copyright {
    color: #666666;
    margin: 0;
    margin-top: 0.1rem;
  }

  @media screen and (max-width: 1000px) {
    display: block;
    text-align: center;
  }

  @media screen and (max-width: 570px) {
    text-align: center;
  }
`

const LeftLinksContainer = styled.div`
  flex: 1;

  > a {
    font-size: 3rem;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  > p,
  > a,
  > div {
    display: inline-block;
    vertical-align: middle;
    margin: 0.5rem 1.6rem 0;
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
        color: ${({ theme }) => theme.palette.primary.main};
      }

      img {
        width: 6rem;
        display:inline-block;
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
        color: ${({ theme }) => theme.palette.primary.main};

        svg {
          transition: fill 0.2s ease-in-out;
          fill: ${({ theme }) => theme.palette.primary.main};
        }

        &:last-of-type,
        &:nth-of-type(3) {
          svg,
          &:hover svg {
            fill: none;
          }
        }

        &:hover {
          color: ${({ theme }) => theme.palette.secondary.main};

          svg {
            fill: ${({ theme }) => theme.palette.secondary.main};
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
  a {
    color: ${({ theme }) => theme.palette.primary.light};
  }

  > small {
    display: flex;
    font-size:1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.down('sm')}) {
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
    p, a {
      font-size: 1.4rem;
    }
    a {
      ${({ theme }) => theme.palette.primary.main};
    }
  }

  > a {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  @media screen and (max-width: 1000px) {
    flex: 1;

    .body {
      max-width: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.down('sm')}) {
    margin-right: 0;
  }
`
const CREATION_YEAR = 2015
const getCurrentYear = () => new Date().getFullYear()

const Footer = () => (
  <Container>
    <Query
      render={data => (
        <LanguageConsumer>
          {({ lang }) => (
            <ThemeConsumer>
              {({ theme }) => (
                <FooterContainer>
                  <Upper className='text-transform-uppercase'>
                    <LeftLinksContainer>
                      <Typography className='copyright'>
                        <small>© IOHK {CREATION_YEAR} - {getCurrentYear()}</small>
                      </Typography>
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
                        <Grid container justify='center' alignItems='center'>
                          <Grid item>
                            <Link
                              className='iohk-logo'
                              href='https://iohk.io/'
                              target='_blank'
                              tracking={{ label: 'footer_iohk_site' }}
                            >
                              <img src={theme.images.IOHKSymbol} alt='IOHK Logo' />
                            </Link>
                          </Grid>
                          <Grid item>
                            <Link
                              className='iohk-logo'
                              href='https://iohk.io/'
                              target='_blank'
                              tracking={{ label: 'footer_iohk_site' }}
                            >
                              <Typography display='inline' variant='h6' color='primary'>IOHK Supported Project</Typography>
                            </Link>
                          </Grid>
                          <Grid item>
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
                          </Grid>
                        </Grid>
                      </div>
                    </RightLinksContainer>
                  </Upper>
                  <Lower>
                    <Box pt={2}>
                      <Grid container spacing={2} justify='space-between'>
                        <Grid item md={7} sm={12}>
                          <Box pr={4}>
                            <Disclaimer>
                              <Markdown
                                className='body text-justify'
                                source={data.content_body}
                              />
                            </Disclaimer>
                          </Box>
                        </Grid>
                        <Grid item md={2} sm={6}>
                          <ListSubheader disableGutters>
                            <Typography variant='h5'>
                              {data.product_info}
                            </Typography>
                          </ListSubheader>
                          <List>
                            {data.product_links.map((link, index) => (
                              <ListItem disableGutters button key={`${index}${link.href}`}>
                                <Link href={link.href} target='_blank' tracking={{ label: `footer_product_${link.href}` }}>
                                  <ListItemText
                                    primary={
                                      <Typography variant='body2'>{link.label}</Typography>
                                    }
                                  />
                                </Link>
                              </ListItem>
                            ))}
                          </List>
                        </Grid>
                        <Grid item md={2} sm={6}>
                          <ListSubheader disableGutters>
                            <Typography variant='h5'>
                              {data.community_info}
                            </Typography>
                          </ListSubheader>
                          <List>
                            {data.community_links.map((link, index) => (
                              <ListItem disableGutters button key={`${index}${link.href}`}>
                                <Link href={link.href} target='_blank' tracking={{ label: `footer_community_${link.href}` }}>
                                  <ListItemText
                                    primary={
                                      <Typography variant='body2'>{link.label}</Typography>
                                    }
                                  />
                                </Link>
                              </ListItem>
                            ))}
                          </List>
                        </Grid>
                      </Grid>
                    </Box>
                  </Lower>
                </FooterContainer>
              )}
            </ThemeConsumer>
          )}
        </LanguageConsumer>
      )}
    />
  </Container>
)

export default Footer
