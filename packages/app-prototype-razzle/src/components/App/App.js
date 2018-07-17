import React from 'react'
import { Router } from '@reach/router'
import { Grommet } from 'grommet'
import { Provider } from 'mobx-react'

import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import Project from './components/Project'

class App extends React.Component {
  render () {
    return (
      <Provider store={this.props.store}>
        <Grommet>
          <Nav />
          <Router>
            <Project path='/projects/:projectOwner/:projectSlug' />
            <Home path='/' />
          </Router>
          <Footer />
        </Grommet>
      </Provider>
    )
  }

}

export default App
