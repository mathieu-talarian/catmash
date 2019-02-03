import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { Button, Layout } from "antd";
import HomePage from "./components/pages/HomePage";
import ResultPage from "./components/pages/ResultPage";
import ErrorPage from "./components/pages/ErrorPage";

import MyHeader from "./components/navigation/Header";
import MyFooter from "./components/navigation/Footer";

import api from "./api";

const { Header, Content, Footer } = Layout;

const App = ({ location }) => (
  <Layout>
    <Header>
      <MyHeader location={location} />
    </Header>
    <Button onClick={() => api.cats.install()}>Cats</Button>
    <Content>
      <Switch>
        <Route location={location} path="/" exact component={HomePage} />
        <Route
          location={location}
          path="/results"
          exact
          component={ResultPage}
        />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Content>
    <Footer>
      <MyFooter />
    </Footer>
  </Layout>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default App;
