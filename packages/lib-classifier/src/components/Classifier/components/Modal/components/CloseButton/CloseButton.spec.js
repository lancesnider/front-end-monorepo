import { shallow, mount } from 'enzyme'
import React from 'react'
import sinon from 'sinon'

import CloseButton from './CloseButton'

describe('Component > CloseButton', function () {
  it('should render without crashing', function () {
    shallow(<CloseButton />)
  })

  it('should call the `closeFn` prop on click', function () {
    const closeFn = sinon.spy()
    const wrapper = mount(<CloseButton closeFn={closeFn} />)
    wrapper.find('button').simulate('click')
    expect(closeFn.called).to.equal(true)
  })
})
