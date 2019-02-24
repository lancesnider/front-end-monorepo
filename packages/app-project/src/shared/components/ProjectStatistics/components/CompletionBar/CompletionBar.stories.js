import React from 'react'
import { storiesOf } from '@storybook/react'
import zooTheme from '@zooniverse/grommet-theme'
import { Grommet } from 'grommet'
import CompletionBar from './CompletionBar'

storiesOf('Shared/Components/Project Statistics/CompletionBar', module)
  .add('0%', () => (
    <Grommet theme={zooTheme}>
      <CompletionBar
        completeness={0}
      />
    </Grommet>
  ))
  .add('50%', () => (
    <Grommet theme={zooTheme}>
      <CompletionBar
        completeness={0.5}
      />
    </Grommet>
  ))
  .add('99%', () => (
    <Grommet theme={zooTheme}>
      <CompletionBar
        completeness={0.99}
      />
    </Grommet>
  ))
