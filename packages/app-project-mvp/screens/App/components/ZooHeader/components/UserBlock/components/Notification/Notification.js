import PropTypes from 'prop-types'
import React from 'react'

import NotificationIcon from './components/NotificationIcon'
import NotificationText from './components/NotificationText'

export default function Notification (props) {
  const Component = (props.isNarrow) ? NotificationIcon : NotificationText
  return (<Component {...props} />)
}

Notification.propTypes = {
  isNarrow: PropTypes.bool
}

Notification.defaultProps = {
  isNarrow: true
}
