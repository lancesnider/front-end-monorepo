import { addDisposer, getRoot, onPatch, flow, types } from 'mobx-state-tree'
import request from 'superagent'
import Subject from './Subject'

const Subjects = types
  .model('Subjects', {
    queue: types.optional(types.array(Subject), [])
  })

  .views(self => ({
    get current() {
      return self.queue.length ? self.queue[0] : null
    }
  }))

  .actions(self => ({
    addActiveWorkflowListener () {
      const { workflows } = getRoot(self)
      const populateQueueDisposer = onPatch(workflows, call => {
        if (call.path === '/activeWorkflow') {
          return self.populate()
        }
      })
      addDisposer(self, populateQueueDisposer)
    },

    advance () {
      self.queue.shift()
      if (self.queue.length < 3) {
        self.populate()
      }
    },

    afterAttach() {
      self.addActiveWorkflowListener()
    },

    populate: flow(function * populate () {
      const { client, workflows } = getRoot(self)
      const workflowId = workflows.activeWorkflow.id
      try {
        const response = yield client.get(`/subjects/queued`, { workflow_id: workflowId })
        const subjects = response.body.subjects

        subjects.forEach(subject => self.queue.push(subject))
      } catch (error) {
        console.info(error)
      }
    })
  }))

export default Subjects