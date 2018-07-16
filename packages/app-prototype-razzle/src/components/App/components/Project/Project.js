import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class Project extends React.Component {
  getData (isServer = false) {
    console.info('fetching')
    const { projectOwner, projectSlug } = this.props
    const slug = `${projectOwner}/${projectSlug}`
    this.props.store.project.fetch(slug)
      .then(() => { console.info(this.props.store) })
  }

  componentDidMount () {
    this.getData()
  }

  render () {
    console.info(this.props)
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    )
  }
}


export default Project
