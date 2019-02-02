import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './App.css'

import HomePage from './components/pages/HomePage'
import ResultPage from './components/pages/ResultPage'

import Header from './components/navigation/Header'
import Footer from './components/navigation/Footer'

import api from './api'

const App = ({ location }) => (
  <div>
    <Header location={location} />
    <button onClick={e => api.cats.install()}>Cats</button>
    <Switch>
      <Route location={location} path='/' exact component={HomePage} />
      <Route location={location} path='/result' exact component={ResultPage} />
    </Switch>
    <Footer />
  </div>
)

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App
