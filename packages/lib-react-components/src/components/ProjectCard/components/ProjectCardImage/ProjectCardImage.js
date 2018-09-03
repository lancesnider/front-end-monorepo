import { Box } from 'grommet'
import React from 'react'
import Spinner from 'react-spinkit'
import styled from 'styled-components'

const ProjectImage = styled.img`
  display: block
  width: 100%
  height: auto
`

// src={getSrcWithProtocol(imageSrc)}
// The `avatar_src` property on a project resource doesn't include a protocol,
// so we default to https for convenience.
function getSrcWithProtocol (src) {
  return (src.startsWith('http'))
    ? src
    : `https://${src}`
}

class ProjectCardImage extends React.Component {
  constructor () {
    super()
    this.state = {
      fetch: 'initialized'
    }
  }

  componentDidMount () {
    this.loadImage()
  }

  loadImage () {
    this.setState({ fetch: 'loading' })
    const img = new Image()
    img.onload = () => {
      this.setState({ fetch: 'success' })
    }
    img.src = getSrcWithProtocol(this.props.src)
  }

  render () {
    let content = (<Spinner name='double-bounce' />)

    if (this.state.fetch === 'success') {
      content = (
        <ProjectImage src={getSrcWithProtocol(this.props.src)} />
      )
    }

    return (
      <Box background='lighterGrey' align='center' justify='center'>
        {content}
      </Box>
    )
  }
}

export default ProjectCardImage
