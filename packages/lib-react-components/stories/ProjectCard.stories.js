import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text } from '@storybook/addon-knobs'
import { linkTo } from '@storybook/addon-links'
import { storiesOf } from '@storybook/react'

import { backgrounds } from './lib'
import { ProjectCard } from '../src'
import projectCardDocs from '../src/components/ProjectCard/README.md'

const PROJECT = {
  display_name: "Sounds of New York City (SONYC)",
  description: "Noise pollution has become one of the greatest problems in many cities around the world. Please help us identify the sounds of the city so we can fight against noise pollution!",
  slug: "anaelisa24\/sounds-of-new-york-city-sonyc",
  redirect: "",
  avatar_src: "panoptes-uploads.zooniverse.org\/production\/project_avatar\/940ed797-9f4e-4c69-b5e1-1f837527b112.png"
}

function Wrapper ({ children }) {
  const style = {
    margin: '0 auto',
    maxWidth: '300px'
  }
  return (
    <div style={style}>
      {children}
    </div>
  )
}

storiesOf('ProjectCard', module)
  .add('Light theme (default)', withInfo(projectCardDocs)(() => (
    <Wrapper>
      <ProjectCard
        description={text('Project Description', PROJECT.description)}
        imageSrc={text('Avatar URL', PROJECT.avatar_src)}
        title={text('Project Title', PROJECT.display_name)}
      />
    </Wrapper>
  )))
  .add('Dark theme', withInfo(projectCardDocs)(() => (
    <Wrapper>
      <ProjectCard
        colorTheme='dark'
        description={text('Project Description', PROJECT.description)}
        imageSrc={text('Avatar URL', PROJECT.avatar_src)}
        title={text('Project Title', PROJECT.display_name)}
      />
    </Wrapper>
  )))
