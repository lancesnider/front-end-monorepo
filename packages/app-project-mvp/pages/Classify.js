import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'

import ClassifyScreen from '../screens/App/screens/Classify'

async function fetchProject ({ owner, project }, store) {
  if (owner && project) {
    await store.project.fetch(`${owner}/${project}`)
  }
}

@inject('store')
@observer
export default class ClassifyPage extends Component {
  static async getInitialProps (context, router, isServer, store) {
    // If we're on the server, fetch the project. We don't need to pass it as
    // a prop, since it'll be collected up as part of the initial state by the
    // `_app` page.
    if (isServer) {
      await fetchProject(context.query, store)
    }

    return {
      router
    }
  }

  componentDidMount () {
    // This is only called on the client, so we check for a project in the
    // store and fetch it if it doesn't exist.
    const { router, store } = this.props
    if (!store.project.id) {
      fetchProject(router.query, store)
    }
  }

  componentDidUpdate () {
    // It looks like Next.js mutates the `router` prop, so if there's a URL
    // change, we check the new slug against the slug for the current project
    // in the store.
    const { router, store } = this.props
    const { owner, project } = router.query
    const slugFromUrl = `${owner}/${project}`
    const storeSlug = store.project.slug
    if (storeSlug !== slugFromUrl) {
      fetchProject(router.query, store)
    }
  }

  render () {
    return (
      <ClassifyScreen />
    )
  }
}
