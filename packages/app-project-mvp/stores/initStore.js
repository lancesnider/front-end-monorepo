import { applySnapshot } from 'mobx-state-tree'
import {
  panoptes as panoptesClient,
  projects as projectsClient
} from '@zooniverse/panoptes-js'
import Store from './Store'
import defaultAuthClient from 'panoptes-client/lib/auth'

let store = null

const defaultApiClient = {
  panoptes: panoptesClient,
  projects: projectsClient
}

function initStore (isServer, snapshot = null, apiClient = defaultApiClient, authClient = defaultAuthClient) {
  if (isServer) {
    store = Store.create({}, { apiClient, authClient })
  }

  if (store === null) {
    store = Store.create({}, { apiClient, authClient })
  }

  if (snapshot) {
    applySnapshot(store, snapshot)
  }

  return store
}

export default initStore
