import counterpart from 'counterpart'
import { Anchor, Box } from 'grommet'
import React from 'react'
import styled from 'styled-components'
import en from './locales/en'

const StyledAnchor = styled(Anchor)`
  font-weight: bold;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

counterpart.registerTranslations('en', en)

const Footer = () => {
  return (
    <Box
      border={{ color: 'teal', side: 'top', size: 'large' }}
      margin={{ top: 'xlarge' }}
      tag="footer"

    >

      <Box pad="xlarge">
        <Box
          direction="row-responsive"
          justify="between"
          margin={{ bottom: 'xlarge' }}
        >
          <div>Foo</div>
          <div>Foo</div>
        </Box>

        <Box
          border={{ color: 'darkGrey', side: 'top' }}
          direction="row-responsive"
          justify="between"
          pad={{ top: 'xlarge' }}
        >
          <div>Foo</div>
          <div>Foo</div>
          <div>Foo</div>
          <div>Foo</div>
          <div>Foo</div>
        </Box>
      </Box>

      <Box
        background="lightGrey"
        pad={{ horizontal: 'xlarge', vertical: 'large' }}
      >
        <Box direction="row-responsive" gap="large">
          <StyledAnchor label={counterpart('Footer.privacyPolicy')} />
          <StyledAnchor label={counterpart('Footer.jobs')} />
          <StyledAnchor label={counterpart('Footer.systemStatus')} />
          <StyledAnchor label={counterpart('Footer.security')} />
        </Box>
      </Box>

    </Box>
  )
}

export default Footer
