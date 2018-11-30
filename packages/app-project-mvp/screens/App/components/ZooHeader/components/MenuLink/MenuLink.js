import zooTheme from '@zooniverse/grommet-theme'
import counterpart from 'counterpart'
import { Anchor } from 'grommet'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import en from './locales/en'
import SpacedText from '../../../../shared/components/SpacedText'

counterpart.registerTranslations('en', en)

export const StyledAnchor = styled(Anchor)`
  border-bottom: 2px solid transparent;
  line-height: 1;
  padding: 2px 0;

  &:hover,
  &:focus {
    text-decoration: none;
    border-bottom-color: ${zooTheme.global.colors.teal};
  }
`

function MenuLink ({ children, color, href }) {
  return (
    <Link href={href}>
      <StyledAnchor>
        <SpacedText
          color={color}
          size='xsmall'
          weight='bold'
        >
          {children}
        </SpacedText>
      </StyledAnchor>
    </Link>
  )
}

MenuLink.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
}

MenuLink.defaultProps = {
  color: zooTheme.global.colors.headerGrey
}

export default MenuLink
