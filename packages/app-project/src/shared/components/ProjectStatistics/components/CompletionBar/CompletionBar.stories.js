import React from 'react'
import { storiesOf } from '@storybook/react'
import zooTheme from '@zooniverse/grommet-theme'
import { Grommet } from 'grommet'
import CompletionBar from './CompletionBar'

storiesOf('Shared/Components/CompletionBar', module)
  .add('CompletionBar', () => (
    <Grommet theme={zooTheme}>
      <CompletionBar
        completeness={0.5}
      />
    </Grommet>
  ))
