import zooTheme from '@zooniverse/grommet-theme'
import { Grommet } from 'grommet'
import App, { Container } from 'next/app'
import { ZooFooter, ZooHeader } from '@zooniverse/react-components'
import React from 'react'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps, theme } = this.props
    return (
      <Container>
        <Grommet theme={theme}>
          <ZooHeader />
          <Component {...pageProps} />
          <ZooFooter />
        </Grommet>
      </Container>
    )
  }
}

MyApp.defaultProps = {
  theme: zooTheme
}
