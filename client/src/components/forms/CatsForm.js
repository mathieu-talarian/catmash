import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Form, Button, Row, Col } from "antd";

const CatsForm = ({ submit, loading, cats }) => {
  const [disabled, updateDisabled] = useState(true);
  const [checked, updateChecked] = useState();
  const { cat1, cat2 } = cats;

  const onSubmit = () => {
    submit({
      cat1: { id: cat1.id, voted: checked === "1" },
      cat2: { id: cat2.id, voted: checked === "2" }
    });
  };

  const handleChange = (_, { value }) => {
    updateChecked(value);
  };

  useEffect(
    () => (checked ? updateDisabled(false) : updateDisabled(true)),
    checked
  );

  const columnStyle = {
    span: 12,
    align: "center"
  };

  return (
    <Form
      loading={loading.toString()}
      className="hiddenRadio"
      onSubmit={onSubmit}
    >
      <Row>
        <Col {...columnStyle}>
          <Form.Item className="image_container">
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
              <img
                src={cat1.image}
                alt="cat1"
                className={`image ${checked !== "1" && "unchecked"}`}
              />
            </label>
          </Form.Item>
        </Col>
        <Col {...columnStyle}>
          <Form.Item className="image_container">
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
              <img
                src={cat2.image}
                alt="cat2"
                className={`image ${checked !== "2" && "unchecked"}`}
              />
            </label>
          </Form.Item>
        </Col>
      </Row>
      <div className="submitButton">
        <Button
          size="large"
          type="primary"
          htmlType="submit"
          disabled={disabled}
          loading={loading}
        >
          Soumettre votre choix
        </Button>
      </div>
    </Form>
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
