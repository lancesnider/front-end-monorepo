import { Anchor, Box, Heading } from 'grommet'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const BoxTitle = styled(Heading)`
  font-size: inherit;
  font-weight: bold;
  letter-spacing: 0.1em;
  line-height: inherit;
  text-transform: uppercase;
`

const BoxLink = styled(Anchor)`
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
`

const ContentBox = ({ children, title, linkUrl, linkText }) => {
  const showBoxLink = linkUrl && linkText
  return (
    <Box
      border={{ color: 'lightGrey' }}
      pad="large"
      tag="section"
    >

      <Box
        direction="row"
        justify="between"
        margin={{ bottom: 'large' }}
        tag="header"
      >
        <BoxTitle level="4" margin="none">
          {title}
        </BoxTitle>
        {showBoxLink && <BoxLink href={linkUrl} label={linkText} />}
      </Box>

      {children}

    </Box>
  )
}

ContentBox.propTypes = {
  children: PropTypes.node,
  linkUrl: PropTypes.string,
  linkText: PropTypes.string,
  title: PropTypes.string.isRequired,
}

ContentBox.defaultProps = {
  title: 'Box Title',
}

export default ContentBox
