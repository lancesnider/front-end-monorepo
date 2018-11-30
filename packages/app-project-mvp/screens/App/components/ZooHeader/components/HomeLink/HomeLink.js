import zooTheme from '@zooniverse/grommet-theme'
import { Anchor } from 'grommet'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import ZooniverseLogo from './components/ZooniverseLogo'

export const StyledAnchor = styled(Anchor)`
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  padding: 2px 0;

  &:hover,
  &:focus {
    border-bottom-color: ${zooTheme.global.colors.teal};
  }
`

export default function HomeLink ({ href }) {
  return (
    <Link href={href}>
      <StyledAnchor>
        <ZooniverseLogo
          fill={zooTheme.global.colors.headerGrey}
        />
      </StyledAnchor>
    </Link>
  )
}

HomeLink.propTypes = {
  href: PropTypes.string
}

HomeLink.defaultProps = {
  href: '/'
}
