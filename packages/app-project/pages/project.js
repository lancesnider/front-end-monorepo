import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import React from 'react'
import { Grommet } from 'grommet'
import theme from '@zooniverse/grommet-theme'
import LatestTalkComment from '../components/project/index/LatestTalkComment'

export default () => (
  <Grommet theme={theme}>
    <Head title="Project" />
    <Nav />

    <div>
      Project
      <LatestTalkComment />
    </div>
  </Grommet>
)
