import React from "react";
import PropTypes from "prop-types";

const Header = () => <div>Header</div>;

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default Header;
