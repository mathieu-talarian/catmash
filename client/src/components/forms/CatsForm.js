import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

const CatsForm = ({ submit, loading, cats }) => {
  const [disabled, updateDisabled] = useState(true);
  const [checked, updateChecked] = useState();
  const { cat1, cat2 } = cats;

  const onSubmit = () => {
    submit();
  };

  const handleChange = (_, { value }) => {
    updateChecked(value);
  };

  useEffect(
    () => (checked ? updateDisabled(false) : updateDisabled(true)),
    checked
  );

  return (
    <form loading={loading} className="hiddenRadio" onSubmit={onSubmit}>
      <input
        id="cat1"
        type="radio"
        name="radioGroup"
        value="1"
        className="input-hidden"
        checked={checked === "1"}
        onChange={e => handleChange(e, e.target)}
      />
      <label htmlFor="cat1">
        <img src={cat1.image} alt="cat1" />
      </label>

      <input
        id="cat2"
        type="radio"
        name="radioGroup"
        value="2"
        className="input-hidden"
        checked={checked === "2"}
        onChange={e => handleChange(e, e.target)}
      />
      <label htmlFor="cat2">
        <img src={cat2.image} alt="cat2" />
      </label>
      <Button disabled={disabled}>Soumettre le choix</Button>
    </form>
  );
};

CatsForm.propTypes = {
  submit: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  cats: PropTypes.shape({
    cat1: PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired
    }),
    cat2: PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired
    })
  }).isRequired
};

export default CatsForm;
