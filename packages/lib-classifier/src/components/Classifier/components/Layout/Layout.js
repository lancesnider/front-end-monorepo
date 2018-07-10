import { inject, observer } from 'mobx-react'
import PropTypes from 'prop-types'
import React from 'react'
import getLayout from './helpers/getLayout'
import FieldGuide from '../FieldGuide'

function storeMapper (stores) {
  const classifier = stores.classifierStore.classifier
  return { classifier }
}

@inject(storeMapper)
@observer
class Layout extends React.Component {
  render () {
    const CurrentLayout = getLayout(this.props.classifier.layout)
    return (
      <div>
        <CurrentLayout />
        <FieldGuide />
      </div>
    )
  }
}

Layout.propTypes = {
  classifier: PropTypes.shape({
    layout: PropTypes.string
  })
}

export default Layout
