import counterpart from 'counterpart'
import { Anchor, Box, Heading } from 'grommet'
import React from 'react'
import en from './locales/en'
import CommentMeta from './CommentMeta'

counterpart.registerTranslations('en', en)

const LatestTalkComment = ({ comment }) => (
  <Box
    border={{ color: 'lightGrey' }}
    pad="large"
  >

    <Box direction="row" gap="large">
      <CommentMeta
        title={counterpart('LatestTalkComment.postedBy')}
        text={comment.author.name}
        link={comment.author.link}
      />
      <CommentMeta
        title={counterpart('LatestTalkComment.postedIn')}
        text={comment.board.name}
        link={comment.board.link}
      />
    </Box>

  </Box>
)

LatestTalkComment.defaultProps = {
  comment: {
    author: {
      name: 'Foobar',
      link: '/foobar',
    },
    board: {
      name: 'Board',
      link: '/board',
    },
  }
}

export default LatestTalkComment
