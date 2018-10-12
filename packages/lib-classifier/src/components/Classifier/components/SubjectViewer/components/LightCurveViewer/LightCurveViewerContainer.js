import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Plot from 'react-plotly.js'
import { max, min } from 'lodash'

import LightCurveViewer from './LightCurveViewer'
import data from './data'

class LightCurveViewerContainer extends Component {

  getConfig () {
    return {
    }
  }

  getData () {
    const { data } = this.props
    return {
      x: data.x,
      y: data.y,
      type: 'scatter',
      mode: 'markers',
      marker: {
        color: 'red'
      },
    }
  }

  getLayout () {
    return {
    }
  }

  render () {
    const data = [this.getData()]
    return (
      <Plot
        data={data}
        config={this.getConfig()}
      />
    )
  }
}

LightCurveViewerContainer.propTypes = {
}

LightCurveViewerContainer.defaultProps = {
  data
}

export default LightCurveViewerContainer
