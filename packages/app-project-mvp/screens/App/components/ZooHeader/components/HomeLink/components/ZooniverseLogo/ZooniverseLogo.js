import zooTheme from '@zooniverse/grommet-theme'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
  display: block
`

export default function ZooniverseLogo ({
  fill,
  size,
  title,
}) {
  return (
    <SVG
      aria-labelledby='header-zooniverse-logo'
      height={size}
      role='img'
      viewBox='0 0 100 100'
      width={size}
    >
      <title id='header-zooniverse-logo'>
        {title}
      </title>
      <g fill={fill} stroke='none' transform='translate(50, 50)'>
        <path d='M 0 -45 A 45 45 0 0 1 0 45 A 45 45 0 0 1 0 -45 Z M 0 -30 A 30 30 0 0 0 0 30 A 30 30 0 0 0 0 -30 Z' />
        <path d='M 0 -14 A 14 14 0 0 1 0 14 A 14 14 0 0 1 0 -14 Z' />
        <ellipse cx='0' cy='0' rx='6' ry='65' transform='rotate(50)' />
      </g>
    </SVG>
  )
}

ZooniverseLogo.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
}

ZooniverseLogo.defaultProps = {
  fill: zooTheme.global.colors.headerGrey,
  size: '1.25em',
  title: 'Zooniverse Logo',
}
