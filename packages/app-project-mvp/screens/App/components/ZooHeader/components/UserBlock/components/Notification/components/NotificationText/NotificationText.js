import counterpart from 'counterpart'
import PropTypes from 'prop-types'
import React from 'react'

import en from './locales/en'
import MenuLink from '../../../../../MenuLink'

counterpart.registerTranslations('en', en)

function NotificationText (props) {
  const {
    href,
    label
  } = props

  return (
    <MenuLink href={href}>
      {label}
    </MenuLink>
  )
}

NotificationText.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

NotificationText.defaultProps = {
}

export default NotificationText
