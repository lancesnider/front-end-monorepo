import makeInspectable from 'mobx-devtools-mst'
import { applySnapshot } from 'mobx-state-tree'
import {
  panoptes as panoptesClient,
  projects as projectsClient
} from '@zooniverse/panoptes-js'
import Store from './Store'

const defaultClient = {
  panoptes: panoptesClient,
  projects: projectsClient
}

function initStore (isServer, snapshot, client = defaultClient) {
  if (isServer) {
    return Store.create({}, { client })
  }

  const store = Store.create({}, { client })
  applySnapshot(store, snapshot)
  makeInspectable(store)
  return store
}

export default initStore
