import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class Home extends React.Component {
  getData () {
    return Promise.resolve('foo')
  }

  render () {
    console.info(this.props.store)
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home
