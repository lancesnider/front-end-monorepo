import { Heading } from 'grommet'
import Link from 'next/link'
import React from 'react'

export default () => (
  <div>
    <Heading><code>classify</code> app</Heading>
    <p>This app handles the classifier, i.e. <code>/projects/[owner]/[project-name]/classify</code>.</p>

    <nav>
      <ul>
        <li>
          <Link
            prefetch
            href={{
              pathname: '/Classify',
              query: {
                owner: 'brooke',
                project: 'i-fancy-cats'
              }
            }}
            as='/projects/brooke/i-fancy-cats/classify'
          >
            <a>I Fancy Cats</a>
          </Link>
        </li>
        <li>
          <Link
            prefetch
            href={{
              pathname: '/Classify',
              query: {
                owner: 'nora-dot-test',
                project: 'planet-finders-beta'
              }
            }}
            as='/projects/nora-dot-test/planet-finders-beta/classify'
          >
            <a>Planet Finders BETA</a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)
