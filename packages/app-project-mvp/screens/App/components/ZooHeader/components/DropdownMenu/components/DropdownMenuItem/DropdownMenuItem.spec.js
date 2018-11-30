import React from 'react'
import { shallow } from 'enzyme'

import DropdownMenuItem from './DropdownMenuItem'

describe('<DropdownMenuItem />', function () {
  let wrapper

  before(function () {
    wrapper = shallow(<DropdownMenuItem text='Zooniverse' />)
  })

  it('should render without crashing', function () { })
})
