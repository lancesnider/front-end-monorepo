import { Box, Button, Grommet, Text } from 'grommet'
import SpacedText from '../SpacedText'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import zooTheme from '@zooniverse/grommet-theme'

const Image = styled.img`
  display: block
  width: 100%
  height: auto
`

// The `avatar_src` property on a project resource doesn't include a protocol,
// so we default to https for convenience.
function getSrcWithProtocol (src) {
  return (src.startsWith('http'))
    ? src
    : `https://${src}`
}

function ProjectCard ({ imageSrc, description, theme, title }) {
  return (
    <Grommet theme={theme}>
      <Box direction='column' border='lighterGrey' background='white'>
        <Image src={getSrcWithProtocol(imageSrc)} />
        <Box direction='column' pad='large'>
          <Box
            border={{ side: 'bottom' }}
            margin={{ bottom: 'small' }}
            pad={{ bottom: 'small' }}
          >
            <SpacedText weight='bold' tag='h4'>
              {title}
            </SpacedText>
          </Box>
          <Text margin='none' size='small'>
            {description}
          </Text>
          View Project
        </Box>
      </Box>
    </Grommet>
  )
}

ProjectCard.propTypes = {
  colorTheme: PropTypes.oneOf(['light', 'dark']),
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  theme: PropTypes.object,
  title: PropTypes.string.isRequired
}

ProjectCard.defaultProps = {
  colorTheme: 'light',
  theme: zooTheme
}

export default ProjectCard
