import { shallow } from 'enzyme'
import React from 'react'

import UserDropdownMenu from './UserDropdownMenu'

let wrapper

describe('Component > UserDropdownMenu', function () {
  before(function () {
    wrapper = shallow(<UserDropdownMenu />)
  })

  it('should render without crashing', function () {})
})
