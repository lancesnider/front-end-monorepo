import counterpart from 'counterpart'
import PropTypes from 'prop-types'
import React from 'react'
import { Box } from 'grommet'
import { FormDown } from 'grommet-icons'
import styled from 'styled-components'

import linkHrefs from './linkHrefs'
import en from './locales/en'
import DropdownMenu from '../../../DropdownMenu'
import MenuLink from '../../../MenuLink'

export const StyledFormDown = styled(FormDown)`
  width: 1em;
`

counterpart.registerTranslations('en', en)

export default function UserDropdownMenu ({ user }) {
  const Label = (
    <MenuLink href='#'>
      {user.displayName}
    </MenuLink>
  )

  return (
    <DropdownMenu
      icon={<StyledFormDown color='headerGrey' />}
      label={Label}
      items={createDropdownLinks()}
    />
  )
}

UserDropdownMenu.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string.isRequired
  }).isRequired
}

function createDropdownLinks() {
  const order = [
    'profile',
    'settings',
    'collections',
    'favorites',
    'signOut'
  ]

  return order.map(item => ({
    href: linkHrefs[item],
    label: counterpart(`UserDropdownMenu.${item}`)
  }))
}
