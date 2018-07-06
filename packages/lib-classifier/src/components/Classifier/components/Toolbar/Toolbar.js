import React from 'react'
import { Box } from 'grommet'
import FieldGuideButton from './components/FieldGuideButton'
import FullscreenButton from './components/FullscreenButton'
import MoveButton from './components/MoveButton'
import PointerButton from './components/PointerButton'
import ResetButton from './components/ResetButton'
import RotateButton from './components/RotateButton'
import ZoomInButton from './components/ZoomInButton'
import ZoomOutButton from './components/ZoomOutButton'

const toolbarStyles = {
  border: {
    color: 'lightGrey',
    side: 'all'
  },
  pad: 'small'
}

function Toolbar () {
  return (
    <div>
      <Box {...toolbarStyles}>
        <PointerButton />
        <MoveButton />
        <ZoomInButton />
        <ZoomOutButton />
        <RotateButton />
        <FullscreenButton />
        <ResetButton />
      </Box>
      <FieldGuideButton />
    </div>
  )
}

export default Toolbar
