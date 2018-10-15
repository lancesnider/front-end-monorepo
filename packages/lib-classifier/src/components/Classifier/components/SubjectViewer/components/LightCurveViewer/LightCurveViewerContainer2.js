import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Plot from 'react-plotly.js'
import { max, min } from 'lodash'

import LightCurveViewer from './LightCurveViewer'
import data from './data'

class LightCurveViewerContainer extends Component {
  constructor () {
    super()
    this.onClick = this.onClick.bind(this)
    this.state = {
      ymax: 0,
      ymin: 0
    }
  }

  getConfig () {
    return {
    }
  }

  getData () {
    const { data } = this.props

    return {
      x: data.x.slice(0,50),
      y: data.y.slice(0,50),
      type: 'scatter',
      mode: 'markers',
      marker: {
        color: 'red'
      },
      hoverinfo: 'none'
    }
  }

  getLayout () {
    return {
      autosize: true,
      xaxis: {
        type: 'date',
        calendar: 'julian',
        rangeslider: {}
      },
      yaxis: {
        fixedrange: true
      }
    }
  }

  onInitialized (figure, graphDiv) {
    console.info(graphDiv)
  }

  getAnnotations () {
    return {}
  }

  onClick () {
    console.info(arguments)
  }

  render () {
    const data = [this.getData(), this.getAnnotations()]
    console.info(data)
    return (
      <Plot
        useResizeHandler={true}
        data={data}
        debug={true}
        divId="foobar"
        onClick={this.onClick}
        onInitialized={this.onInitialized}
        layout={this.getLayout()}
        config={this.getConfig()}
        style={{ width: "100%", height: "100%" }}
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
