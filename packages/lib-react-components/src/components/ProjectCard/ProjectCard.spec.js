import { shallow } from 'enzyme'
import React from 'react'

import ProjectCard from './ProjectCard'

describe('ProjectCard', function () {
  it('should render without crashing', function () {
    shallow(<ProjectCard />)
  })
})
