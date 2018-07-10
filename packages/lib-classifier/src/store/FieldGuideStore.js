import { autorun } from 'mobx'
import { addDisposer, flow, getEnv, getRoot, types } from 'mobx-state-tree'
import ResourceStore from './ResourceStore'
import FieldGuide from './FieldGuide'
import asyncStates from '../helpers/asyncStates'

const FieldGuideStore = types
  .model('FieldGuideStore', {
    active: types.maybe(types.reference(FieldGuide)),
    resources: types.optional(types.map(FieldGuide), {}),
    type: types.optional(types.string, 'field_guides')
  })

  .actions(self => ({

    afterAttach () {
      self.createProjectObserver()
    },

    createProjectObserver () {
      const projectDisposer = autorun(() => {
        const project = getRoot(self).projects.active
        if (project) {
          self.reset()
          self.getFieldGuide(project.id)
        }
      })
      addDisposer(self, projectDisposer)
    },

    fetchResource: flow(function * fetchResource (projectId) {
      const client = getRoot(self).client.panoptes
      const { type } = self
      self.loadingState = asyncStates.loading
      try {
        const response = yield client.get(`/${type}`, { project_id: projectId })
        const resource = response.body[type][0]
        self.loadingState = asyncStates.success
        return resource
      } catch (error) {
        console.error(error)
        self.loadingState = asyncStates.error
      }
    }),

    getFieldGuide: flow(function * getFieldGuide (id) {
      const fieldGuide = yield self.fetchResource(id)
      self.resources.put(fieldGuide)
      self.active = fieldGuide.id
    })
  }))

export default types.compose(ResourceStore, FieldGuideStore)
