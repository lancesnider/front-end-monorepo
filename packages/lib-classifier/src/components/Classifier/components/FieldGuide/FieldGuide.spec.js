import { shallow } from 'enzyme'
import React from 'react'
import FieldGuide from './FieldGuide'

describe('Component > FieldGuide', function () {
  it('should render without crashing', function () {
    shallow(<FieldGuide />)
  })

  it('should render nothing if the `isFieldGuideActive` prop is falsy', function () {
    const wrapper = shallow(<FieldGuide />)
    expect(wrapper.get(0)).to.equal(null)
  })

  it('should render a `<Modal />` if the `isFieldGuideActive` is truthy', function () {
    const wrapper = shallow(<FieldGuide isFieldGuideActive={true} />)
    expect(wrapper.find('Modal')).to.have.length(1)
  })
})
