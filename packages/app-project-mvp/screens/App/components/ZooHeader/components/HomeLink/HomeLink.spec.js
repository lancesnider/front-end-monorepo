import { shallow } from 'enzyme'
import React from 'react'

import HomeLink from './HomeLink'

let wrapper

describe('Component > HomeLink', function () {
  before(function () {
    wrapper = shallow(<HomeLink />)
  })

  it('should render without crashing', function () {})
})
