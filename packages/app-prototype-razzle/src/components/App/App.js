import React from 'react'
import { Router } from '@reach/router'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import Dashboard from './components/Dashboard'

const App = () => (
  <div>
    <Nav />
    <Router>
      <Home path='/' />
      <Dashboard path='dashboard' />
    </Router>
    <Footer />
  </div>
)

export default App
