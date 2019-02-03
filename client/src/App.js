import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { Button } from "antd";

import HomePage from "./components/pages/HomePage";
import ResultPage from "./components/pages/ResultPage";
import ErrorPage from "./components/pages/ErrorPage";

import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";

import api from "./api";

const App = ({ location }) => (
  <div>
    <Header location={location} />
    <Button onClick={() => api.cats.install()}>Cats</Button>
    <Switch>
      <Route location={location} path="/" exact component={HomePage} />
      <Route location={location} path="/results" exact component={ResultPage} />
      <Route path="*" component={ErrorPage} />
    </Switch>
    <Footer />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
