import zooTheme from '@zooniverse/grommet-theme'
import { Box, Grid } from 'grommet'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import FinishedForTheDay from './components/FinishedForTheDay'
import ProjectStatistics from './components/ProjectStatistics'
import Head from '../../shared/components/Head'

function storeMapper (stores) {
  const { description, displayName } = stores.store.project
  return {
    projectDescription: description,
    projectName: displayName
  }
}

@inject(storeMapper)
@observer
class ClassifyContainer extends Component {
  render () {
    return (
      <>
        <Head
          title={this.props.projectName}
          description={this.props.projectDescription}
        />
        <Grid gap='medium'>
          <FinishedForTheDay />
          <ProjectStatistics />
        </Grid>
      </>
    )
  }
}

ClassifyContainer.propTypes = {
  projectDescription: PropTypes.string,
  projectName: PropTypes.string
}

export default ClassifyContainer
