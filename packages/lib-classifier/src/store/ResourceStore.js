import { flow, getRoot, types } from 'mobx-state-tree'
import asyncStates from 'src/helpers/asyncStates'
import numberString from './types/numberString'
import Resource from './Resource'

const ResourceStore = types
  .model('ResourceStore', {
    resources: types.optional(types.map(Resource), {}),
    type: types.string,
    active: types.maybe(types.reference(Resource))
  })

  .actions(self => ({
    fetchResource: flow(function * fetchResource (id) {
      const client = getRoot(self).client.panoptes
      const response = yield client.get(`/${self.type}/${id}`)
      const resource = response.body[self.type][0]
      console.info(resource)
      return resource
    }),

    setActive: flow(function * setActive (id) {
      const active = self.resources.get(id) || null

      if (!active) {
        const resource = yield self.fetchResource(id)
        self.resources.put(resource)
      }

      self.active = id
    })
  }))


export default ResourceStore