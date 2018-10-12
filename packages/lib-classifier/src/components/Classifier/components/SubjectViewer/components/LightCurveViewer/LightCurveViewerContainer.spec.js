import { shallow } from 'enzyme'
import React from 'react'
import LightCurveViewer from './LightCurveViewer'

describe('Component > LightCurveViewerContainer', function () {
  it('should render without crashing', function () {
    shallow(<LightCurveViewerContainer />)
  })
})
