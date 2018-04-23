import { Anchor, Box, Heading } from 'grommet'
import React from 'react'
import styled from 'styled-components'

const StyledTitleAnchor = styled(Anchor)`
  font-weight: bold;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

const StyledHeading = styled(Heading)`
  font-size: 1.4rem;
  line-height: 1.571428571;

`

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const StyledLi = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`

const StyledAnchor = styled(Anchor)`
  font-weight: bold;
  color: #5c5c5c;
`

const LinkBox = ({ title, links }) => {
  return (
    <Box flex={true}>

      <StyledHeading level="4" margin={{ bottom: 'medium', top: 'none' }}>
        <StyledTitleAnchor label={title.text} href={title.url} />
      </StyledHeading>

      {links && links.length && (
        <StyledUl>
          {links.map(link =>
            <StyledLi key={link.text}>
              <StyledAnchor
                label={link.text}
                href={link.url}
              />
            </StyledLi>
          )}
        </StyledUl>
      )}

    </Box>
  )
}

export default LinkBox
