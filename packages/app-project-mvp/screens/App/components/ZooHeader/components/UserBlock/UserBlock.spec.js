import { shallow } from 'enzyme'
import React from 'react'

import UserBlock from './UserBlock'

let wrapper

describe('Component > UserBlock', function () {
  before(function () {
    wrapper = shallow(<UserBlock />)
  })

  it('should render without crashing', function () {})
})
