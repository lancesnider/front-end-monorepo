import counterpart from 'counterpart'
import { Anchor, Box, Grid } from 'grommet'
import React from 'react'
import styled from 'styled-components'
import en from './locales/en'
import LinkBox from './components/LinkBox'
import links from './links'

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
          margin={{ bottom: 'large' }}
        >
          <div>Foo</div>
          <div>Foo</div>
        </Box>

        <Box
          border={{ color: 'darkGrey', side: 'top' }}
          direction="row-responsive"
          justify="between"
          pad={{ top: 'large' }}
        >
          {links.map(linkCollection =>
            <LinkBox
              key={linkCollection.title.text}
              title={linkCollection.title}
              links={linkCollection.links}
            />
          )}
        </Box>
      </Box>

      <Box
        background="lightGrey"
        margin={{ top: 'xlarge' }}
        pad={{ horizontal: 'xlarge', vertical: 'large' }}
      >
        <Box direction="row-responsive" gap="large">
          <StyledAnchor label={counterpart('Footer.lower.privacyPolicy')} />
          <StyledAnchor label={counterpart('Footer.lower.jobs')} />
          <StyledAnchor label={counterpart('Footer.lower.systemStatus')} />
          <StyledAnchor label={counterpart('Footer.lower.security')} />
        </Box>
      </Box>

    </Box>
  )
}

export default Footer
