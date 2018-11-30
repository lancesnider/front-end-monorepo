import { Box } from 'grommet'
import PropTypes from 'prop-types'
import React from 'react'

function ClassifyBox ({ children }) {
  return (
    <Box background='white' border={{ color: 'lightGrey', side: 'all' }} pad='medium'>
      {children}
    </Box>
  )
}

ClassifyBox.propTypes = {
  children: PropTypes.node
}

export default ClassifyBox
