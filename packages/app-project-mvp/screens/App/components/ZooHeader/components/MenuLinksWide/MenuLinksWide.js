import PropTypes from 'prop-types'
import React from 'react'
import { Box } from 'grommet'

import MenuLink from '../MenuLink'

function MenuLinksWide ({ fill, links }) {
  return (
    <Box gap='medium' direction='row' fill={fill}>
      {links.map(link => (
        <MenuLink key={link.text} href={link.href}>
          {link.text}
        </MenuLink>
      ))}
    </Box>
  )
}

MenuLinksWide.propTypes = {
  fill: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }).isRequired).isRequired
}

MenuLinksWide.defaultProps = {
  fill: 'horizontal'
}

export default MenuLinksWide
