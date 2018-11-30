import React from 'react'
import PropTypes from 'prop-types'

import { path } from './path'

const ZooniverseLogotype = ({ color, height, title, width }) => {
  return (
    <svg
      role='img'
      viewBox='0 0 178 18'
      width={width}
      height={height}
      aria-labelledby='footer-zooniverse-wordmark'
    >
      <title id='footer-zooniverse-wordmark'>
        {title}
      </title>
      <g fill={color} stroke='none'>
        <path fillRule='evenodd' d={path} />
      </g>
    </svg>
  )
}

ZooniverseLogotype.propTypes = {
  color: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
}

ZooniverseLogotype.defaultProps = {
  color: 'currentColor',
  height: '18px',
  title: 'Zooniverse Logotype',
  width: '178px',
}

export default ZooniverseLogotype
