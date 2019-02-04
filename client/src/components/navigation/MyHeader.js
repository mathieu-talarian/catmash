import React from "react";
import PropTypes from "prop-types";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Header = ({ location }) => (
  <Menu
    theme="dark"
    mode="horizontal"
    style={{ lineHeight: "64px" }}
    defaultSelectedKeys={location.pathname === "/" ? ["1"] : ["2"]}
  >
    <Menu.Item key="1">
      <Link to="/">Vote</Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/results">Resultats</Link>
    </Menu.Item>
  </Menu>
);

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default Header;
