import { shallow } from 'enzyme';
import React from 'react';
import Nav from './Nav';

describe('Nav', function () {
  it('should render without crashing', function () {
    shallow(<Nav />);
  });
});
