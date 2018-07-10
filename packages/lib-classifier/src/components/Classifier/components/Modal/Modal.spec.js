import { shallow } from 'enzyme'
import React from 'react'
import Modal from './Modal'

describe('Component > Modal', function () {
  it('should render without crashing', function () {
    shallow(<Modal />)
  })

  it('should render a `<Layer />`', function () {
    const wrapper = shallow(<Modal />)
    expect(wrapper.find('Layer')).to.have.length(1)
  })
})
