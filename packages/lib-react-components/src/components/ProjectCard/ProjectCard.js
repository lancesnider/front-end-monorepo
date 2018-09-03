import { Box, Grommet, Text } from 'grommet'
import SpacedText from '../SpacedText'
import PropTypes from 'prop-types'
import React from 'react'
import zooTheme from '@zooniverse/grommet-theme'

import ProjectCardImage from './components/ProjectCardImage'
import LinkButton from './components/LinkButton'


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
            alignContent='start'
          >
            <SpacedText weight='bold' tag='h4'>
              {title}
            </SpacedText>
          </Box>

          <Text margin='none' size='small'>
            {description}
          </Text>
          <Box align='start'>
            <LinkButton />
          </Box>

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
