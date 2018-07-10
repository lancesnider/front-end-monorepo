import React from 'react'
import { Box, Layer, Text } from 'grommet';
import styled from 'styled-components'
import CloseButton from './components/CloseButton'

const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0;
  text-shadow: 0 2px 2px rgba(0,0,0,0.22);
  text-transform: uppercase;
`

function Modal ({ children, closeFn, title }) {
  return (
    <Layer
      onClickOutside={closeFn}
      onEsc={closeFn}
      plain={true}
    >
      <Box
        align="center"
        background="teal"
        direction="row"
        gap="medium"
        justify="between"
        pad={{ horizontal: 'medium', vertical: 'xsmall' }}
        tag="header"
      >
        <Title>
          {title}
        </Title>
        <CloseButton closeFn={closeFn} />
      </Box>
      <Box background="white" pad="medium">
        {children}
      </Box>
    </Layer>
  )
}

export default Modal
