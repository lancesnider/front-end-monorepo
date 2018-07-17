import React from 'react'
import { Link } from '@reach/router'

const Nav = () => (
  <nav>
    <Link to='/'>Home</Link> | {' '}
    <Link to='/projects/brooke/i-fancy-cats'>I Fancy Cats</Link>
  </nav>
)

export default Nav
