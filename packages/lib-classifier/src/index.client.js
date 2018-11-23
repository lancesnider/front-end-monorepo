import makeInspectable from 'mobx-devtools-mst'
import { Provider } from 'mobx-react'
import PropTypes from 'prop-types'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
  panoptes as panoptesClient,
  projects as projectsClient
} from '@zooniverse/panoptes-js'

// import { registerWorkers } from '../../workers'
// import { isBackgroundSyncAvailable } from '../../helpers/featureDetection'

import RootStore from './store'
import Layout from './components/Layout'

const client = {
  panoptes: panoptesClient,
  projects: projectsClient
}

// We don't register the queue service worker if background sync API is not available
// We might want to move this check elsewhere once we add other service workers for other tasks
// if (isBackgroundSyncAvailable()) registerWorkers()

class Classifier extends React.Component {
  constructor (props) {
    super(props)

    this.classifierStore = RootStore.create({}, { client })
    makeInspectable(this.classifierStore)
  }

  componentDidMount () {
    const { project } = this.props
    this.setProject(project)
  }

  componentDidUpdate (prevProps) {
    const { project } = this.props
    if (project.id !== prevProps.project.id) {
      this.setProject(project)
    }
  }

  setProject (project) {
    this.classifierStore.projects.setResource(project)
    this.classifierStore.projects.setActive(project.id)
  }

  render () {
    return (
      <Provider classifierStore={this.classifierStore}>
        <ThemeProvider theme={{ mode: this.props.mode }}>
          <Layout />
        </ThemeProvider>
      </Provider>
    )
  }
}

Classifier.defaultProps = {
  mode: 'light',
  user: null
}

Classifier.propTypes = {
  authClient: PropTypes.object,
  mode: PropTypes.string,
  project: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  user: PropTypes.object
}

export default Classifier
