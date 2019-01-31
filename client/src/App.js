import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './App.css'

import { Layout, Button } from 'antd'

import HomePage from './pages/HomePage'
import ResultPage from './pages/ResultPage'
import api from './api'

const App = ({ location }) => <Layout>
  <Button onClick={(e) => api.cats.install()}>Cats</Button>
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
</Layout>

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App
