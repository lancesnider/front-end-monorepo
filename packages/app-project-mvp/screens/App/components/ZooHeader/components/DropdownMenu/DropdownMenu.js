import zooTheme from '@zooniverse/grommet-theme'
import { Menu } from 'grommet'
import PropTypes from 'prop-types'
import React from 'react'

import DropdownMenuItem from './components/DropdownMenuItem'

export default function DropdownMenu ({ items, ...props }) {
  return (
    <Menu
      {...props}
      items={items.map(wrapMenuItem)}
    />
  )
}

DropdownMenu.defaultProps = {
  dropAlign: { right: 'right', top: 'top' },
  dropBackground: zooTheme.global.colors.teal,
  label: '',
  size: 'small'
}

DropdownMenu.propTypes = {
  dropAlign: PropTypes.object,
  dropBackground: PropTypes.string,
  icon: PropTypes.node.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  })).isRequired,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  size: PropTypes.string
}

function wrapMenuItem ({ href, label }) {
  return {
    href,
    label: (<DropdownMenuItem text={label} />)
  }
}
