import { shallow, render } from 'enzyme'
import React from 'react'
import ContentBox from './ContentBox'

const TITLE_TEXT = 'foo'
const LINK_TEXT = 'bar'
const LINK_URL = '/baz'

describe('ContentBox component', function () {
  it('should render without crashing', function () {
    shallow(<ContentBox />)
  })

  it('should render a title prop as an h4', function () {
    const wrapper = render(<ContentBox title={TITLE_TEXT} />)
    const title = wrapper.find('h4')
    title.length.should.equal(1)
    title.text().should.equal(TITLE_TEXT)
  })

  describe('link behavior', function () {
    it('should render a link if passed both url and link text', function () {
      const wrapper = render(<ContentBox title={TITLE_TEXT}  linkText={LINK_TEXT} linkUrl={LINK_URL} />)
      const link = wrapper.find('a')
      link.length.should.equal(1)
      link.text().should.equal(LINK_TEXT)
      link.attr('href').should.equal(LINK_URL)
    })

    it('should not render a link if missing the url', function () {
      const wrapper = render(<ContentBox title={TITLE_TEXT}  linkText={LINK_TEXT} />)
      wrapper.find('a').length.should.equal(0)
    })

    it('should not render a link if missing the link text', function () {
      const wrapper = render(<ContentBox title={TITLE_TEXT} linkUrl={LINK_URL} />)
      wrapper.find('a').length.should.equal(0)
    })
  })

  it('should render any children passed', function () {
    const children = (<code>child</code>)
    const wrapper = shallow(<ContentBox title={TITLE_TEXT} linkUrl={LINK_URL} children={children} />)
    wrapper.children('code').length.should.equal(1)
  })
})
