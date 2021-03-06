import asyncStates from '@zooniverse/async-states'
import * as d3 from 'd3'
import { get, zip } from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import request from 'superagent'

import LightCurveViewer from './LightCurveViewer'
import locationValidator from '../../helpers/locationValidator'

class LightCurveViewerContainer extends Component {
  constructor () {
    super()
    this.state = {
      loading: asyncStates.initialized,
      dataExtent: {
        x: [],
        y: []
      },
      dataPoints: []
    }
  }

  componentDidMount () {
    if (this.props.subject) {
      this.handleSubject()
    }
  }

  componentDidUpdate (prevProps) {
    const { subject, subjectId } = this.props
    const prevSubject = prevProps.subject
    const prevSubjectId = prevProps.subjectId

    if (subject && (!prevSubject || prevSubjectId !== subjectId)) {
      this.handleSubject()
    }
  }

  getSubjectUrl () {
    // Find the first location that has a JSON MIME type.
    // NOTE: we also temporarily accept plain text, due to quirks with the
    // Panoptes CLI uploading wonky MIME types (@shaun 20181024)
    const locations = get(this, 'props.subject.locations', [])
    const jsonLocation = locations.find(l => l['application/json'] || l['text/plain']) || {}
    const url = Object.values(jsonLocation)[0]
    if (url) {
      return url
    } else {
      throw new Error('No JSON url found for this subject')
    }
  }

  async requestData () {
    try {
      this.setState({ loading: asyncStates.loading })
      const url = this.getSubjectUrl()
      const response = await request.get(url)
      if (!response.ok) {
        throw new Error('Invalid response')
      } else {
        // Get the JSON data, or (as a failsafe) parse the JSON data if the
        // response is returned as a string
        this.setState({ loading: asyncStates.success })
        return response.body || JSON.parse(response.text)
      }
    } catch (error) {
      this.setState({
        loading: asyncStates.error,
        data: null
      })
      return error
    }
  }

  async handleSubject () {
    try {
      const rawData = await this.requestData()
      this.setState({
        dataExtent: {
          x: d3.extent(rawData.x),
          y: d3.extent(rawData.y)
        },
        dataPoints: zip(rawData.x, rawData.y)
      })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { subject } = this.props
    if (!subject) {
      return null
    }

    return (
      <LightCurveViewer
        dataExtent={this.state.dataExtent}
        dataPoints={this.state.dataPoints}
      />
    )
  }
}

LightCurveViewerContainer.propTypes = {
  subject: PropTypes.shape({
    locations: PropTypes.arrayOf(locationValidator)
  }),
  subjectId: PropTypes.string
}

export default LightCurveViewerContainer
