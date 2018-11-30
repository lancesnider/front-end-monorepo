import asyncStates from '@zooniverse/async-states'
import { flow, getRoot, types } from 'mobx-state-tree'

import numberString from './types/numberString'

const User = types
  .model('User', {
    admin: types.optional(types.boolean, false),
    displayName: types.maybeNull(types.string),
    id: types.maybeNull(types.string)
  })

  .views(self => ({
    get isAdmin() {
      return !!self.admin
    },
    get isSignedIn() {
      return !!self.id
    }
  }))

  .actions(self => ({
    set(user) {
      console.info(user)
      self.admin = user.admin
      self.displayName = user.display_name
      self.id = user.id
    }
  }))

export default User
