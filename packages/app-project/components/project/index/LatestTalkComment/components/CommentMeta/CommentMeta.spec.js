import { shallow } from 'enzyme'
import React from 'react'
import CommentMeta from './CommentMeta'

describe('CommentMeta component', function () {
  it('should render without crashing', function () {
    shallow(<CommentMeta />)
  })
})
