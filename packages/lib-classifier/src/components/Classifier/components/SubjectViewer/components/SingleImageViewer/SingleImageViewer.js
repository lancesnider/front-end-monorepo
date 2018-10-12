import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import InteractionLayer from '../InteractionLayer'

import { VictoryPie } from 'victory'

const SVG = styled.svg`
  height: 100%;
  width: 100%;
`

function SingleImageViewer ({ url }) {
  //TEST
  /*return (
    <SVG>
      <image xlinkHref={url} />
      <InteractionLayer />
    </SVG>
  )*/
  
  console.log('+++ SINGLE IMAGE VIEWER')
  
  return (
    <VictoryPie />
  )
}

SingleImageViewer.propTypes = {
  url: PropTypes.string.isRequired
}

export default SingleImageViewer
