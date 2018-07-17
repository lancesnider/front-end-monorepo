import { flow, getRoot, types } from 'mobx-state-tree'
import { get } from 'lodash'
import asyncStates from '../helpers/asyncStates'
import numberString from './types/numberString'

const Project = types
  .model('Project', {
    displayName: types.maybe(types.string),
    error: types.optional(types.frozen, null),
    id: types.maybe(numberString),
    loadingState: types.optional(types.enumeration('state', asyncStates.values), asyncStates.initialized),
    slug: types.maybe(types.string)
  })

  .actions(self => {
    let client

    return {
      afterAttach () {
        client = getRoot(self).client
      },

      fetch: flow(function * fetch (slug) {
        self.loadingState = asyncStates.loading
        try {
          const project = yield client.panoptes.get(`/projects`, { slug })
            .then(response => get(response, 'body.projects[0]'))
          console.info('project fetch', project)
          self.displayName = project.display_name
          self.id = project.id
          self.loadingState = asyncStates.success
          self.slug = project.slug
        } catch (error) {
          self.error = error.message
          self.loadingState = asyncStates.error
        }
      })
    }
  })

export default Project
