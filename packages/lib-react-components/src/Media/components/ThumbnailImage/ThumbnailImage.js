import React from 'react'
import styled from 'styled-components'
import { Box, Image } from 'grommet'
import ProgressiveImage from 'react-progressive-image'
import zooTheme from '@zooniverse/grommet-theme'
import getThumbnailSrc from '../../helpers/getThumbnailSrc'
import pxToRem from '../../../helpers/pxToRem'
import { propTypes, defaultProps } from '../../helpers/mediaPropTypes'

const StyledBox = styled(Box)`
  max-height: ${props => props.maxHeight}px;
  max-width: ${props => props.maxWidth}px;
`

const StyledImage = styled(Image)`
  height: 100%;
  object-position: 50% 0%;
  width: 100%;
`

export function Placeholder(props) {
  return (
    <Box background={zooTheme.global.colors.brand} flex={props.flex} justify='center' align='center'>
      {props.children}
    </Box>
  )
}

export default class ThumbnailImage extends React.Component {
  constructor() {
    super()

    this.state = {
      failed: false
    }
  }

  handleError() {
    this.setState((prevState) => { if (!prevState.failed) return { failed: true } })
  }

  render() {
    const { alt, delay, fit, flex, height, origin, placeholder, src, width } = this.props
    const thumbnailSrc = this.state.failed ? src : getThumbnailSrc({ height, origin, src, width })
    const fallbackStyle = {
      maxHeight: `${height}px`,
      maxWidth: `${width}px`
    }

    return (
      <ProgressiveImage
        onError={this.handleError.bind(this)}
        delay={delay}
        src={thumbnailSrc}
        placeholder=''
      >
        {(returnedSrc, loading) => (
          <>
            {loading ?
              <Placeholder height={height} flex={flex} width={width}>{placeholder}</Placeholder> :
              <StyledBox animation={loading ? undefined : "fadeIn"} flex={flex} maxWidth={width} maxHeight={height}>
                <StyledImage
                  alt={alt}
                  fit={fit}
                  src={returnedSrc}
                />
              </StyledBox>}
            <noscript>
              <div style={fallbackStyle}>
                <img src={returnedSrc} alt={alt} height='100%' width='100%' style={{ flex, objectFit: fit }} />
              </div>
            </noscript>
          </>
        )}
      </ProgressiveImage>
    )
  }
}

ThumbnailImage.propTypes = {
  ...propTypes
}

ThumbnailImage.defaultProps = {
  ...defaultProps
}