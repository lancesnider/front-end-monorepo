import { shallow } from 'enzyme'
import React from 'react'

import MenuLink from './MenuLink'

let wrapper

describe('Component > MenuLink', function () {
  before(function () {
    wrapper = shallow(<MenuLink />)
  })

  it('should render without crashing', function () {})
})
