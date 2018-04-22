import counterpart from 'counterpart'
import { Anchor, Box, Heading, Text } from 'grommet'
import React from 'react'
import styled from 'styled-components'
import CommentMeta from './components/CommentMeta'
import ContentBox from '../ContentBox'
import en from './locales/en'

counterpart.registerTranslations('en', en)

const CommentBody = styled(Text)`
  line-height: 1.57143;
`

const CommentDate = styled(Text)`
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const LatestTalkComment = ({ comment }) => (
  <ContentBox
    linkText={counterpart('LatestTalkComment.viewLink')}
    linkUrl={'#'}
    title={counterpart('LatestTalkComment.title')}
  >

    <Heading
      color="darkGrey"
      level="4"
      margin={{ bottom: 'medium', top: 'none' }}
    >
      {comment.title}
    </Heading>

    <Box
      direction="row-responsive"
      gap="large"
      margin={{ bottom: 'large', top: 'none' }}
    >
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

    <CommentBody tag="p">
      <CommentDate color="darkTeal" margin={{ right: 'medium' }}>
        18 Nov.
      </CommentDate>
      Maecenas semper fringilla rutrum ipsum mattis posuere, mollis morbi donec fusce lobortis sapien, ante magna aenean urna himenaeos. Ipsum cum quam euismod ultrices aliquam porttitor massa suspendisse class, faucibus torquent vestibulum per sit augue nullam ut velit, hendrerit vel molestie enim sollicitudin eros integer vitae.
    </CommentBody>

  </ContentBox>
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
    title: 'New Comment'
  }
}

export default LatestTalkComment
