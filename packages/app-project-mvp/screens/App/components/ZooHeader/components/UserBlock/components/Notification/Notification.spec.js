import { shallow } from 'enzyme'
import React from 'react'

import Notification from './Notification'

let wrapper

describe('Component > Notification', function () {
  before(function () {
    wrapper = shallow(<Notification />)
  })

  it('should render without crashing', function () {})
})
