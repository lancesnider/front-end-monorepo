import { shallow } from 'enzyme'
import React from 'react'
import LatestTalkCommentContainer from './LatestTalkCommentContainer'

describe('LatestTalkCommentContainer component', function () {
  it('should render without crashing', function () {
    shallow(<LatestTalkCommentContainer />)
  })
})
