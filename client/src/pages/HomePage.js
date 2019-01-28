import React from 'react'
import PropTypes from 'prop-types'

const HomePage = ({ location }) => {
  return (
    <div>
      HomePage
    </div>)
}

HomePage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default HomePage
