import { Box } from 'grommet'
import PropTypes from 'prop-types'
import React from 'react'
import counterpart from 'counterpart'

import HomeLink from './components/HomeLink'
import MenuLinksWide from './components/MenuLinksWide'
import MenuLinksNarrow from './components/MenuLinksNarrow'
import UserBlock from './components/UserBlock'
import SignedOut from './components/SignedOut'
import createMenuLinks from './helpers/createMenuLinks'
import en from './locales/en'

counterpart.registerTranslations('en', en)

const commonBoxProps = {
  align: 'center',
  direction: 'row',
  gap: 'medium',
}

export default function ZooHeader ({ isNarrow, menuLinks, isSignedIn, user }) {
  const UserOrLogin = () => (isSignedIn)
    ? <UserBlock isNarrow={isNarrow} user={user} />
    : <SignedOut />

  return (
    <Box
      {...commonBoxProps}
      background='black'
      justify='between'
      pad={{ left: 'medium', right: 'small' }}
      tag='header'
    >

      {isNarrow && (
        <>
          <Box {...commonBoxProps}>
            <Box margin={{ vertical: 'small' }}>
              <HomeLink />
            </Box>
          </Box>
          <Box {...commonBoxProps} justify='end'>
            <UserOrLogin />
            <MenuLinksNarrow links={menuLinks} />
          </Box>
        </>
      )}

      {!isNarrow && (
        <>
          <Box {...commonBoxProps}>
            <Box margin={{ vertical: 'small' }}>
              <HomeLink />
            </Box>
            <MenuLinksWide links={menuLinks} />
          </Box>
          <Box {...commonBoxProps} justify='end'>
            <UserOrLogin />
          </Box>
        </>
      )}

    </Box>
  )
}

ZooHeader.defaultProps = {
  isNarrow: false,
  menuLinks: createMenuLinks(),
}

ZooHeader.propTypes = {
  isNarrow: PropTypes.bool,
}
