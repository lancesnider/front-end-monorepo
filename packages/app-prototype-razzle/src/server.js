import express from 'express'
import { getSnapshot } from 'mobx-state-tree'
import React from 'react'
import { ServerLocation } from '@reach/router'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import reactTreeWalker from 'react-tree-walker'
import { ServerStyleSheet } from 'styled-components'

import App from './components/App'
import initStore from './stores'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    const context = {}

    const store = initStore(true)

    const Root = () => (
      <ServerLocation url={req.url}>
        <App store={store} isServer={true} />
      </ServerLocation>
    )

    const sheet = new ServerStyleSheet()
    const markup = renderToString(sheet.collectStyles(<Root />))
    const styleTags = sheet.getStyleTags()


    function visitor(element, instance) {
      if (instance && typeof instance.getData === 'function') {
        return instance.getData(true)
      }
    }

    try {
      await reactTreeWalker(Root(), visitor, {}, { componentWillUnmount: true })
    } catch (error) {
      console.error(error)
    }

    const snapshot = getSnapshot(store)
    console.info(snapshot)

    if (context.url) {
      res.redirect(context.url)
    } else {
      res.status(200).send(`
        <!doctype html>
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
            <script>window.__INITIAL_STATE__ = ${JSON.stringify(snapshot)}</script>
          </body>
        </html>
      `)
    }
  })

export default server
