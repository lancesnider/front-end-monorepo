import React from 'react'
import { Link } from '@reach/router'

const Nav = () => (
  <nav>
    <Link to='/'>Home</Link> | {' '}
    <Link to='dashboard'>Dashboard</Link>
  </nav>
)

export default Nav
