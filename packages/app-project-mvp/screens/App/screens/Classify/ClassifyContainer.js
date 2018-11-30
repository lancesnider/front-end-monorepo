import zooTheme from '@zooniverse/grommet-theme'
import { Box, Grid } from 'grommet'
import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Classifier from '@zooniverse/classifier'
import FinishedForTheDay from './components/FinishedForTheDay'
import ProjectStatistics from './components/ProjectStatistics'
import Head from '../../shared/components/Head'

function storeMapper (stores) {
  const { project } = stores.store
  return {
    project
  }
}

@inject(storeMapper)
@observer
class ClassifyContainer extends Component {
  render () {
    // We convert the project store to a POJO, as the classifier also uses
    // `mobx-state-tree` and we can't use something that's already part of
    // another tree.
    const projectObject = this.props.project.toJSON()

    return (
      <>
        <Head
          title={this.props.project.displayName}
          description={this.props.project.description}
        />
        <Grid gap='medium'>
          <Classifier project={projectObject} />
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
