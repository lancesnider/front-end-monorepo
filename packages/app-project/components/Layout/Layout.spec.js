import { shallow, render } from 'enzyme'
import React from 'react'
import Layout from './Layout'

describe('Layout component', function () {
  it('should render without crashing', function () {
    shallow(<Layout />)
  })

  it('should render any children passed', function () {
    const children = (<code>child</code>)
    const wrapper = shallow(<Layout children={children} />)
    wrapper.children('code').length.should.equal(1)
  })
})
