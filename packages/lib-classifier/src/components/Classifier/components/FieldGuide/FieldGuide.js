import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import React from 'react'

import Modal from '../Modal'

function storeMapper (stores) {
  const { classifier } = stores.classifierStore
  return {
    closeFn: classifier.hideFieldGuide,
    isFieldGuideActive: classifier.isFieldGuideActive
  }
}

@inject(storeMapper)
@observer
class FieldGuide extends React.Component {
  renderModal () {
    const { closeFn } = this.props
    return (
      <Modal closeFn={closeFn} title="Field Guide">
        <div>Field Guide content</div>
      </Modal>
    )
  }

  render () {
    return (this.props.isFieldGuideActive)
      ? this.renderModal()
      : null
  }
}

FieldGuide.propTypes = {
  closeFn: PropTypes.func,
  isFieldGuideActive: PropTypes.bool
}

export default FieldGuide
