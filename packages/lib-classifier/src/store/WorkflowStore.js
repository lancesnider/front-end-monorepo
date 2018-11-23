import { autorun } from 'mobx'
import { addDisposer, getRoot, types } from 'mobx-state-tree'
import ResourceStore from './ResourceStore'
import Workflow from './Workflow'

const WorkflowStore = types
  .model('WorkflowStore', {
    active: types.maybe(types.reference(Workflow)),
    resources: types.optional(types.map(Workflow), {}),
    type: types.optional(types.string, 'workflows')
  })

  .actions(self => {
    function afterAttach () {
      // createUPPObserver()
      createProjectObserver()
      selectWorkflow()
    }

    function createUPPObserver () {
      const uppDisposer = autorun(() => {
        const upp = getRoot(self).userProjectPreferences.active
        if (upp) {
          self.reset()
          selectWorkflow()
        }
      })
      addDisposer(self, uppDisposer)
    }

    function createProjectObserver () {
      const projectObserver = autorun(() => {
        const project = getRoot(self).projects.active
        if (project) {
          self.reset()
          selectWorkflow()
        }
      })
      addDisposer(self, projectObserver)
    }

    function getDefaultWorkflowId () {
      const project = getRoot(self).projects.active
      let id = null

      if (project) {
        if (project.configuration && project.configuration.default_workflow) {
          id = project.configuration.default_workflow
        } else if (project.links && project.links.active_workflows[0]) {
          // TODO: This should be changed to select an id randomly out of the active workflows array
          id = project.links.active_workflows[0]
        }
      }

      return id
    }

    function selectWorkflow (id = getDefaultWorkflowId()) {
      if (id) {
        self.setActive(id)
      }
    }

    return {
      afterAttach
    }
  })

export default types.compose('WorkflowResourceStore', ResourceStore, WorkflowStore)
