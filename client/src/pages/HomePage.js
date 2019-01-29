import React from 'react'
import PropTypes from 'prop-types'
import api from '../api'

class HomePage extends React.Component {

  state = {
    cat1: {},
    cat2: {}
  }

  componentDidMount () {
    api.cats.get()
      .then(res => 
        this.setState(res))
      .catch(err => console.log(err))
  }

  render () {
    console.log(this.state)
    return (
      <div>
        HomePage
        <img src={this.state.cat1.Image} />
        <img src={this.state.cat2.Image} />
      </div>)
  }
}

HomePage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default HomePage
