import { shallow } from 'enzyme'
import React from 'react'
import LatestTalkComment from './LatestTalkComment'

describe('LatestTalkComment component', function () {
  it('should render without crashing', function () {
    shallow(<LatestTalkComment />)
  })
})
