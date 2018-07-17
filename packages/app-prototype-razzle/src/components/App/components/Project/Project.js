import { inject, observer } from 'mobx-react'
import React from 'react'

@inject('store')
@observer
class Project extends React.Component {
  async getData () {
    const { projectOwner, projectSlug, store } = this.props
    const slug = `${projectOwner}/${projectSlug}`

    if (store.project.slug !== slug) {
      return store.project.fetch(slug)
    }

    return null
  }

  componentDidMount () {
      // this.fetchProject()
  }

  componentDidUpdate () {
    // this.fetchProject()
  }

  render () {
    const { project } = this.props.store
    if (project.loadingState !== 'success') {
      return (<div>Loading</div>)
    }

    return (
      <div>
        <h1>{project.displayName}</h1>
      </div>
    )
  }
}

export default Project
