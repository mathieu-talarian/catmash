import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { Layout } from "antd";
import HomePage from "./components/pages/HomePage";
import ResultPage from "./components/pages/ResultPage";
import ErrorPage from "./components/pages/ErrorPage";

import MyHeader from "./components/navigation/MyHeader";
import MyFooter from "./components/navigation/MyFooter";

const { Header, Content, Footer } = Layout;

const App = ({ location }) => (
  <Layout>
    <Header>
      <MyHeader location={location} />
    </Header>
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
