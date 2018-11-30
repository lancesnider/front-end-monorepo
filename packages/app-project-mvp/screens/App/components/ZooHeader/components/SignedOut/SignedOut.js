import counterpart from 'counterpart'
import PropTypes from 'prop-types'
import React from 'react'
import { Box } from 'grommet'

import en from './locales/en'
import MenuLink from '../MenuLink'

counterpart.registerTranslations('en', en)

function SignedOut () {
  return (
    <Box gap='small' direction='row'>
      <MenuLink href='/'>
        {counterpart('SignedOut.signIn')}
      </MenuLink>
      <MenuLink href='/'>
        {counterpart('SignedOut.register')}
      </MenuLink>
    </Box>
  )
}

SignedOut.propTypes = {
}

SignedOut.defaultProps = {
}

export default SignedOut
