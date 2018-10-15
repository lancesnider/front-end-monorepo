import * as d3 from 'd3'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import LightCurveViewer from './LightCurveViewer'
import data from './data'

import createContainer from './d3/createContainer'
import getXFromEvent from './d3/getXFromEvent'
import createPoints from './d3/createPoints'
import createAnnotations from './d3/createAnnotations'

class LightCurveViewerContainer extends Component {
  constructor() {
    super()
    this.state = {
      annotations: [],
      tempX1: null,
      tempX2: null
    }
  }

  componentDidMount() {
    const width = 500
    const height = 500
    const margin = 50
    const axisLength = width - 2 * margin
    const axisHeight = height - 2 * margin

    const that = this

    const svgContainer = createContainer(this._rootNode, width, height)
      .on('mousedown', mouseDown)
      .on('mouseup', mouseUp)

    function mouseDown () {
      d3.event.preventDefault()
      const newX = getXFromEvent(this, xScale)
      that.setState({ tempX1: newX })
      svgContainer.on('mousemove', mouseMove)
    }

    function mouseMove () {
      d3.event.preventDefault()
      const newX = getXFromEvent(this, xScale)
      that.setState({ tempX2: newX })
    }

    function mouseUp (e) {
      d3.event.preventDefault()
      svgContainer.on('mousemove', null)
      const { tempX1, tempX2 } = that.state
      const positive = tempX1 < tempX2
      const value = positive ? [tempX1, tempX2] : [tempX2, tempX1]
      const newState = Object.assign({}, that.state, {
        annotations: that.state.annotations.concat([value]),
        tempX1: null,
        tempX2: null,
      })
      that.setState(newState, () => {
        console.info(that.state)
        drawAnnotations()
      })
    }

    const xScale = d3.scaleLinear()
      .domain(d3.extent(data.x))
      .range([0, axisLength])

    const xAxis = d3.axisBottom(xScale)

    svgContainer.append('g')
      .classed('x-axis', true)
      .attr('transform', `translate(${margin},${(height - margin)})`)
      .call(xAxis)

    const yScale = d3.scaleLinear()
      .domain(d3.extent(data.y))
      .range([0, axisLength])

    const yAxis = d3.axisLeft(yScale)

    svgContainer.append('g')
      .classed('y-axis', true)
      .attr('transform', `translate(${margin},${margin})`)
      .call(yAxis)

    const zippedData = _.zip(data.x, data.y)

    const g1 = svgContainer.append('svg:g');

    g1.selectAll('.dot')
      .data(zippedData)
      .enter()
      .call(createPoints, xScale, yScale, margin)

    const g2 = svgContainer.append('svg:g')
      .attr('class', 'annotations')

    function drawAnnotations () {
      g2.selectAll('.annotation')
        .data(that.state.annotations)
        .enter()
        .call(createAnnotations, xScale, axisHeight, margin)
    }
  }

  shouldComponentUpdate() {
    return false
  }

  _setRef(componentNode) {
    this._rootNode = componentNode
  }

  render() {
    return (
      <div className='lightcurve-container' ref={this._setRef.bind(this)} />
    )
  }
}

LightCurveViewerContainer.propTypes = {
}

LightCurveViewerContainer.defaultProps = {
  data
}

export default LightCurveViewerContainer
