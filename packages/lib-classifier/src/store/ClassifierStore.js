import { getRoot, types } from 'mobx-state-tree'
import layouts from '../helpers/layouts'
import subjectViewers from '../helpers/subjectViewers'

const Classifier = types
  .model('Classifier', {
    layout: types.optional(types.enumeration('layout', layouts.values), layouts.default),
    isFieldGuideActive: types.optional(types.boolean, false)
  })

  .actions(self => ({
    setLayout (layout = layouts.DefaultLayout) {
      self.layout = layout
    },

    showFieldGuide () {
      const isFieldGuideAvailable = !!getRoot(self).fieldGuides.active.id
      if (isFieldGuideAvailable) {
        self.isFieldGuideActive = true
      }
    },

    hideFieldGuide () {
      self.isFieldGuideActive = false
    }
  }))

export default Classifier
