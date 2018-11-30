import React from 'react'
import PropTypes from 'prop-types'

import SpacedText from '../../../../../../shared/components/SpacedText'

export default function DropdownMenuItem ({ color, text }) {
  return (
    <SpacedText
      color={color}
      weight='bold'
      size='xsmall'
    >
      {text}
    </SpacedText>
  )
}

DropdownMenuItem.defaultProps = {
  color: '#fff'
}

DropdownMenuItem.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired
}
