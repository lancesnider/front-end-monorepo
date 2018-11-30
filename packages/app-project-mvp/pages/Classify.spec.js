import { shallow } from 'enzyme'
import React from 'react'

import Classify from './Classify'
import FinishedForTheDay from '../components/FinishedForTheDay'
import ProjectStatistics from '../components/ProjectStatistics'

let wrapper

describe('Page > Classify', function () {
  before(function () {
    wrapper = shallow(<Classify />)
  })

  it('should render without crashing', function () {})

  it('should render the `FinishedForTheDay` component', function () {
    expect(wrapper.find(FinishedForTheDay)).to.have.lengthOf(1)
  })

  it('should render the `ProjectStatistics` component', function () {
    expect(wrapper.find(ProjectStatistics)).to.have.lengthOf(1)
  })
})
