import { shallow } from 'enzyme'
import React from 'react'

import SignedOut from './SignedOut'

let wrapper

describe('Component > SignedOut', function () {
  before(function () {
    wrapper = shallow(<SignedOut />)
  })

  it('should render without crashing', function () {})
})
