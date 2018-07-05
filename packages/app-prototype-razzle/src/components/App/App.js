import React from 'react'
import { Router } from '@reach/router'
import { Grommet } from 'grommet'
import { Provider } from 'mobx-react'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import initStore from '../../stores'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.store = initStore(props.isServer, props.initialState, props.client)
  }

  render () {
    return (
      <Provider store={this.store}>
        <Grommet>
          <Nav />
          <Router>
            <Home path='/' />
            <Dashboard path='dashboard' />
          </Router>
          <Footer />
        </Grommet>
      </Provider>
    )
  }

}

export default App
