import zooTheme from '@zooniverse/grommet-theme'
import { Grommet, Box } from 'grommet'
import { Provider } from 'mobx-react'
import { getSnapshot } from 'mobx-state-tree'
import App, { Container } from 'next/app'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

import ZooHeader from '../screens/App/components/ZooHeader'
import ZooFooter from '../screens/App/components/ZooFooter'
import initStore from '../stores'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

function checkIfIsServer () {
  return typeof window === 'undefined'
}

export default class CustomApp extends App {
  static async getInitialProps ({ Component, router, ctx: context }) {
    const isServer = checkIfIsServer()
    const store = initStore(isServer)
    let componentProps

    // Carry out any `getInitialProps` defined on the page component
    if (Component.getInitialProps) {
      componentProps = await Component.getInitialProps(context, router, isServer, store)
    }

    return {
      componentProps: componentProps || {},
      initialState: store ? getSnapshot(store) : {}
    }
  }

  constructor(props) {
    super(props)
    const { initialState } = props
    const isServer = checkIfIsServer()
    this.store = initStore(isServer, initialState)
  }

  componentDidMount () {
    // Used for debugging
    window.store = this.store

    // Update user
    this.store.authClient.checkCurrent()
      .then(user => this.store.user.set(user))
  }

  render () {
    const { Component, componentProps, theme } = this.props
    return (
      <Container>
        <GlobalStyle />
        <Provider store={this.store}>
          <Grommet theme={theme}>
            <ZooHeader />
            <Box
              background='lighterGrey'
              pad={{ horizontal: 'medium', vertical: 'large' }}
            >
              <Component {...componentProps} />
            </Box>
            <ZooFooter />
          </Grommet>
        </Provider>
      </Container>
    )
  }
}

CustomApp.defaultProps = {
  theme: zooTheme
}
