import NextHead from 'next/head'
import { string } from 'prop-types'
import React from 'react'

const defaultDescription = 'The Zooniverse is the world’s largest and most popular platform for people-powered research. Our goal is to enable research that would not be possible, or practical, otherwise.'
const defaultOGURL = ''
const defaultOGImage = ''
const defaultTitle = 'Zooniverse - People-Powered Research'

function Head (props) {
  const title = (props.title)
    ? `${props.title} | ${defaultTitle}`
    : defaultTitle

  return (
    <NextHead>
      <meta charSet='UTF-8' />
      <title>{title}</title>
      <meta name='description' content={props.description || defaultDescription} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <link rel='apple-touch-icon' sizes='180x180' href='/static/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon-16x16.png' />
      <link rel='manifest' href='/static/site.webmanifest' />
      <link rel='mask-icon' href='/static/safari-pinned-tab.svg' color='#007482' />
      <meta name='msapplication-TileColor' content='#00aba9' />
      <meta name='theme-color' content='#ffffff' />

      <meta property='og:url' content={props.url || defaultOGURL} />
      <meta property='og:title' content={props.title || ''} />
      <meta property='og:description' content={props.description || defaultDescription} />
      <meta name='twitter:site' content={props.url || defaultOGURL} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image' content={props.ogImage || defaultOGImage} />
      <meta property='og:image' content={props.ogImage || defaultOGImage} />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
    </NextHead>
  )
}




Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
