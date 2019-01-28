import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './App.css'

import HomePage from './pages/HomePage'
import ResultPage from './pages/ResultPage'

const App = ({ location }) => <>
  <Link to='/'>To home</Link>
  <Link to='/result'>To result</Link>
  <Switch>

    <Route
      location={location}
      path='/'
      exact
      component={HomePage}
    />
    <Route
      location={location}
      path='/result'
      exact
      component={ResultPage}
    />
  </Switch>
</>

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App
