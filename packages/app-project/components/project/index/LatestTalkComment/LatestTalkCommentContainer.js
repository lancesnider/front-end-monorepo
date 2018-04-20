import PropTypes from 'prop-types'
import React, { Component } from 'react'
import LatestTalkComment from './LatestTalkComment'

class LatestTalkCommentContainer extends Component {
  render() {
    <LatestTalkComment />
  }
}

LatestTalkCommentContainer.propTypes = {
  projectId: PropTypes.string.isRequired,
}

LatestTalkCommentContainer.defaultProps = {
  projectId: '100'
}

export default LatestTalkCommentContainer
