import { shallow } from 'enzyme'
import React from 'react'

import NotificationText from './NotificationText'

let wrapper

describe('Component > NotificationText', function () {
  before(function () {
    wrapper = shallow(<NotificationText />)
  })

  it('should render without crashing', function () {})
})
