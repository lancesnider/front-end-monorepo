import * as d3 from 'd3'
import PropTypes from 'prop-types'
import React from 'react'

import setPointStyle from './d3/setPointStyle'
import addBackgroundLayer from './d3/addBackgroundLayer'


class LightCurveViewer extends React.Component {

  constructor() {
    super()

    //React reference to the DOM.
    //See: https://reactjs.org/docs/refs-and-the-dom.html
    this.svgContainer = React.createRef()

    //D3 bits
    this.d3svg = null
    this.d3dataLayer = null
  }

  componentDidMount () {
    this.d3init()
    this.d3loadData()
  }

  componentDidUpdate (prevProps) {
    this.d3loadData()
  }

  componentWillUnmount () {
    this.d3finish()
  }

  d3init () {
    //Prepare the main SVG
    //--------------------------------
    this.d3svg = d3.select(this.svgContainer.current).append('svg')
      .attr('class', 'light-curve-viewer')
      //.attr('viewBox', `0 0 ${this.props.width} ${this.props.height}`)  //TODO: check
      //.attr('style', 'width: 100%; height: 100%')  //TODO: check
      .attr('width', this.props.width)
      .attr('height', this.props.height)

    //Deco: Background layer
    this.d3svg.call(addBackgroundLayer)
    //--------------------------------

    //Prepare the data layer
    //--------------------------------
    this.d3dataLayer = this.d3svg.append('g')
      .attr('class', 'data-layer')
    //--------------------------------

    //Add interactive elements for panning and zooming
    //--------------------------------
    this.d3interfaceLayer = this.d3svg.append('rect')
      .attr('class', 'interface-layer')
      .attr('width', '100%')
      .attr('height', '100%')
      .style('fill', 'none')
      .style('pointer-events', 'all')

    this.d3interfaceLayer.call(d3.zoom()
      .scaleExtent([0.1, 10])
      .on('zoom', () => {
        this.d3dataLayer.attr('transform', d3.event.transform)
      })
    )
    //--------------------------------
  }

  d3finish () {
    if (!this.d3svg || !this.d3interfaceLayer) {
      return false
    }

    // Remove event listeners
    this.d3interfaceLayer.call
      .on('zoom', null)
  }

  d3resetData () {
    if (!this.d3svg || !this.d3interfaceLayer) {
      return false
    }

    this.d3dataLayer.selectAll('.data-point').exit()
  }

  d3loadData () {
    if (!this.d3svg || !this.d3interfaceLayer) {
      return false
    }

    //Start with a clean slate
    this.d3resetData()

    const jsonData = this.props.jsonData
    if (!jsonData) {
      return
    }

    //WIP: Scale and Axis layer
    //--------------------------------
    const xScale = d3.scaleLinear()
      .domain(d3.extent(jsonData.x))
      .range([0, this.props.width])
    const xAxis = d3.axisBottom(xScale)
    const yScale = d3.scaleLinear()
      .domain(d3.extent(jsonData.y))
      .range([this.props.height, 0])  //REVERSE!
    const yAxis = d3.axisLeft(yScale)
    //--------------------------------

    //Insert the data
    //--------------------------------
    const data = jsonData.x.map((x, index) => {
      const y = jsonData.y[index]
      return {
        x: xScale(x),
        y: yScale(y)
      }
    })

    this.d3dataLayer.selectAll('circle')
      .data(data)
      .enter()
        .append('circle')
          .attr('cx', (d) => d.x)
          .attr('cy', (d) => d.y)
          .call(setPointStyle)

    //--------------------------------
  }

  render () {
    return (
      <div className="light-curve-viewer" ref={this.svgContainer}></div>
    )
  }
}

LightCurveViewer.propTypes = {
  jsonData: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
}

LightCurveViewer.defaultProps = {
  jsonData: null,
  width: 500,
  height: 500,
}

export default LightCurveViewer
