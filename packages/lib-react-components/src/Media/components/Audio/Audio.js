import React from 'react'
import { Anchor, Box } from 'grommet'
import { propTypes, defaultProps } from '../../helpers/mediaPropTypes'

export default function Audio({ alt, controls, flex, src }) {
  return (
    <Box flex={flex}>
      <audio aria-label={alt} controls={controls} preload='metadata'>
        <source src={src} />
        <Anchor href={src} label={alt} />
      </audio>
    </Box>
  )
}

Audio.defaultProps = {
  ...defaultProps
}

Audio.propTypes = {
  ...propTypes
}

