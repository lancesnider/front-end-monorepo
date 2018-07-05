import React from 'react'
import { Router } from '@reach/router'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import { Grommet } from 'grommet'

const App = () => (
  <Grommet>
    <Nav />
    <Router>
      <Home path='/' />
      <Dashboard path='dashboard' />
    </Router>
    <Footer />
  </Grommet>
)

export default App
