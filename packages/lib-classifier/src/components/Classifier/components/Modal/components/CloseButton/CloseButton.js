import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import WithHoverOrFocusProp from '../../../WithHoverOrFocusProp'
import closeIcon from './closeIcon'

const Button = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  display: block;
  padding: 0;
`

const SVG = styled.svg`
  display: block;
  fill: white;
  fill-opacity: ${props => props.hoverOrFocus ? '0.7' : '1'}
  overflow: visible;
  height: 1.2rem;
  width: 1.2rem;
`

function CloseButton ({ closeFn, eventHandlers, hoverOrFocus }) {
  return (
    <Button
      ariaRole="Close modal"
      onClick={closeFn}
      {...eventHandlers}
    >
      <SVG hoverOrFocus={hoverOrFocus}>
        {closeIcon}
      </SVG>
    </Button>
  )
}

CloseButton.propTypes = {
  closeFn: PropTypes.func,
  eventHandlers: PropTypes.object,
  hoverOrFocus: PropTypes.bool
}

export default WithHoverOrFocusProp(CloseButton)
