import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import React from 'react'
import { Grommet } from 'grommet'
import theme from '@zooniverse/grommet-theme'

export default () => (
  <Grommet theme={theme}>
    <Head title="Home" />
    <Nav />

    <div>
      Home
    </div>
  </Grommet>
)
