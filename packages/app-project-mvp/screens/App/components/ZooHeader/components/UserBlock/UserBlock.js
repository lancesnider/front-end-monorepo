import counterpart from 'counterpart'
import PropTypes from 'prop-types'
import React from 'react'
import { Box } from 'grommet'

import en from './locales/en'
import UserDropdownMenu from './components/UserDropdownMenu'
import Notification from './components/Notification'

counterpart.registerTranslations('en', en)

const commonBoxProps = {
  align: 'center',
  direction: 'row'
}

export default function UserBlock ({ isNarrow, user }) {
  const unreadNotificationsCount = 0
  const unreadMessagesCount = 0

  return (
    <Box {...commonBoxProps} gap='small'>
      <Box {...commonBoxProps} gap='medium'>
        <Notification
          href='/'
          isNarrow={isNarrow}
          label={counterpart('UserBlock.notifications', {
            count: unreadNotificationsCount
          })}
        />
        <Notification
          href='/'
          isNarrow={isNarrow}
          label={counterpart('UserBlock.messages', {
            count: unreadMessagesCount
          })}
        />
      </Box>
      <UserDropdownMenu user={user} />
    </Box>
  )
}

UserBlock.propTypes = {
  isNarrow: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
}
