import { Box, Grommet, Text } from 'grommet'
import SpacedText from '../SpacedText'
import PropTypes from 'prop-types'
import React from 'react'
import zooTheme from '@zooniverse/grommet-theme'

import ProjectCardImage from './components/ProjectCardImage'

function ProjectCard ({ imageSrc, description, theme, title }) {
  return (
    <Grommet theme={theme}>
      <Box direction='column' border='lighterGrey' background='white'>
        <ProjectCardImage src={imageSrc} />
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
