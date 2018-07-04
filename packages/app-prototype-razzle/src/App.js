import React from 'react'
import { Router, Link } from '@reach/router'
import './App.css'

let Home = () => (
  <div>
    <h1>Home</h1>

  </div>
)

let Dash = () => <div>Dash</div>

const App = () => (
  <div>
    <nav>
      <Link to='/'>Home</Link> |{' '}
      <Link to='dashboard'>Dashboard</Link>
    </nav>
    <Router>
      <Home path='/' />
      <Dash path='dashboard' />
    </Router>
  </div>
)

export default App
