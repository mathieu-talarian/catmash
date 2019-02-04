import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import api from "../../api";

const CountPage = ({ newCount }) => {
  const [count, updateCount] = useState(0);

  const onInitialRender = () => {
    api.count
      .getCount()
      .then(res => updateCount(res.total))
      .catch();
  };

  useEffect(onInitialRender, []);
  useEffect(onInitialRender, [newCount]);
  return (
    <div className="counter">
      {count} {count === 1 && count === 0 ? "vote" : "votes"}
    </div>
  );
};

CountPage.propTypes = {
  newCount: PropTypes.number.isRequired
};

export default CountPage;
