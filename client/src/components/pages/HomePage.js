import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import api from "../../api";
import CatsForm from "../forms/CatsForm";

const HomePage = () => {
  const [loading, updateLoading] = useState(true);
  const [cats, updateCats] = useState({
    cat1: {
      id: 0,
      image: ""
    },
    cat2: {
      id: 0,
      image: ""
    }
  });

  const onInitialRender = () => {
    updateLoading(true);
    api.cats
      .get()
      .then(res => {
        updateCats({
          cat1: {
            id: res.cat1.ID,
            image: res.cat1.image
          },
          cat2: {
            id: res.cat2.ID,
            image: res.cat2.image
          }
        });
        updateLoading(false);
      })
      .catch(() => toast.error("un probléme est survenu avec le serveur"));
  };

  const submit = (e, res) => {
    const { cat1, cat2 } = cats;
    e.preventDefault();
    updateLoading(true);
    api.vote
      .post({
        cat1: { id: cat1.id, voted: res === 1 },
        cat2: { id: cat2.id, voted: res === 2 }
      })
      .then(() => updateLoading(false))
      .catch(err => toast.error(err));
  };

  useEffect(onInitialRender, []);

  return (
    <div>
      <ToastContainer />
      <image src={cats.cat1.image} />
      HomePage
      {loading ? (
        <></>
      ) : (
        <CatsForm submit={submit} loading={loading} cats={cats} />
      )}
      <Link to="/results">Résultats</Link>
    </div>
  );
};

HomePage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default HomePage;
