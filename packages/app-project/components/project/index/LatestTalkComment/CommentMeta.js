import React from 'react'
import PropTypes from 'prop-types'
import { Anchor, Box, Text } from 'grommet'
import styled from 'styled-components'

const StyledAnchor = styled(Anchor)`
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const StyledText = styled(Text)`
  font-weight: bold;
`

const CommentMeta = ({ link, text, title }) => (
  <Box direction="row">
    <StyledText margin={{ right: 'medium' }}>
      {title}
    </StyledText>
    <StyledAnchor
      href={link}
      label={text}
    />
  </Box>
)

CommentMeta.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
}

CommentMeta.defaultProps = {
  link: '/foobar',
  text: 'Comment meta value',
  title: 'Comment meta',
}

export default CommentMeta
