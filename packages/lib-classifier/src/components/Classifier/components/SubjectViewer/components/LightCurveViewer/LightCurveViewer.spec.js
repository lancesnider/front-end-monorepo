import { shallow } from 'enzyme'
import React from 'react'
import LightCurveViewer from './LightCurveViewer'

describe('Component > LightCurveViewer', function () {
  it('should render without crashing', function () {
    shallow(<LightCurveViewer />)
  })
})
