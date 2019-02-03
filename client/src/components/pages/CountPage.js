import React, { useState, useEffect } from "react";
import api from "../../api";

const CountPage = () => {
  const [count, updateCount] = useState(0);

  const onInitialRender = () => {
    api.count
      .getCount()
      .then(res => updateCount(res.total))
      .catch();
  };

  useEffect(onInitialRender, []);
  return <div>Nombre de votes : {count}</div>;
};

export default CountPage;
