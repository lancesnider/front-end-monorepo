import express from 'express'
import React from 'react'
import { ServerLocation } from '@reach/router'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import reactTreeWalker from 'react-tree-walker'
import { ServerStyleSheet } from 'styled-components'

import App from './components/App'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    const context = {}

    const Root = () => (
      <ServerLocation context={context} url={req.url}>
        <App />
      </ServerLocation>
    )

    const sheet = new ServerStyleSheet()
    const markup = renderToString(sheet.collectStyles(<Root />))
    const styleTags = sheet.getStyleTags()


    const values = []
    let store

    // You provide this! See the API docs below for full details.
    function visitor(element, instance) {
      if (instance && instance.store) {
        console.info(instance.store)
        store = instance.store
      }

      if (instance && typeof instance.getData === 'function') {
        console.info('hit', instance)
        return instance.getData().then(value => {
          values.push(value)
        })
      }
    }

    await reactTreeWalker(Root(), visitor, {}, { componentWillUnmount: true })
      .then(() => {
        console.log('values:', values) // [1, 2, 3, 5];
        console.info(store)
        // Now is a good time to call React's renderToString whilst exposing
        // whatever values you built up to your app.
      })
      // since v3.0.0 you need to do your own error handling!
      .catch(err => console.error(err))


    if (context.url) {
      res.redirect(context.url)
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${assets.client.css
          ? `<link rel="stylesheet" href="${assets.client.css}">`
          : ''
        }
        ${process.env.NODE_ENV === 'production'
          ? `<script src="${assets.client.js}" defer></script>`
          : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
        ${styleTags}
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
      )
    }
  })

export default server
