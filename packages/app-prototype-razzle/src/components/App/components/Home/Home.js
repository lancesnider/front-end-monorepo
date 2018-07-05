import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class Home extends React.Component {
  render () {
    console.info(this)
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
}

export default Home
