import App from './components/App'
import React from 'react'
import { hydrate } from 'react-dom'
import initStore from './stores'

const snapshot = window.__INITIAL_STATE__
const store = initStore(false, snapshot)

hydrate(<App store={store} isServer={false} />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
