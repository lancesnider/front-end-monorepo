import zooTheme from '@zooniverse/grommet-theme'
import counterpart from 'counterpart'
import PropTypes from 'prop-types'
import { Box } from 'grommet'
import React from 'react'

import en from './locales/en'
import ZooniverseLogotype from './components/ZooniverseLogotype'
import SpacedText from '../../shared/components/SpacedText'

counterpart.registerTranslations('en', en)

function ZooFooter (props) {
  return (
    <Box
      align='center'
      background='white'
      border={{
        color: zooTheme.global.colors.brand,
        side: 'top',
        size: 'medium'
      }}
      direction='row-responsive'
      pad={{ horizontal: 'medium', vertical: 'large' }}
      tag='footer'
    >
      <Box>
        <ZooniverseLogotype color='black' />
        <SpacedText color='black' margin={{ top: 'xsmall' }} weight='bold'>
          People-powered research
        </SpacedText>
      </Box>
    </Box>
  )
}

ZooFooter.defaultProps = {

}

ZooFooter.propTypes = {

}

export default ZooFooter
