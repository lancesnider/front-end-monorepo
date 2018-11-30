import { getEnv, types } from 'mobx-state-tree'

import Project from './Project'
import User from './User'

const Store = types
  .model('Store', {
    project: types.optional(Project, {}),
    user: types.optional(User, {})
  })

  .views(self => ({
    get apiClient () {
      return getEnv(self).apiClient
    },

    get authClient () {
      return getEnv(self).authClient
    }
  }))

export default Store
