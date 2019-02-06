import React, { useState, useEffect } from "react";
import { Button, Layout, Spin, Skeleton, Row, Col } from "antd";
import { ToastContainer, toast } from "react-toastify";
import api from "../../api";
import CatsForm from "../forms/CatsForm";
import CountPage from "./CountPage";

import toastOptions from "../tools/toastOptions";

const HomePage = () => {
  const [loading, updateLoading] = useState(true);
  const [disabled, updateDisabled] = useState(false);
  const [vote, updateVote] = useState(0);
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

  const submit = res => {
    updateLoading(true);
    api.vote
      .post(res)
      .then(() => {
        toast.success("Votre vote a été pris en compte");
        updateVote(vote + 1);
        onInitialRender();
      })
      .catch(err => toast.error(err));
  };

  const changeImages = () => {
    updateDisabled(true);
    onInitialRender();
    setTimeout(() => {
      updateDisabled(false);
    }, 20000);
  };

  useEffect(onInitialRender, []);

  return (
    <Layout>
      <Layout.Content>
        <ToastContainer {...toastOptions} />
        <div className="homeTitle">
          <h1>Votez pour votre chat préféré !</h1>
        </div>
        {loading ? (
          <Skeleton active>
            <Spin tip="Chargement..." />
            <Row>
              <Col />
              <Col />
            </Row>
          </Skeleton>
        ) : (
          <CatsForm submit={submit} loading={loading} cats={cats} />
        )}
        <div className="changeButton">
          <Button size="large" disabled={disabled} ghost onClick={changeImages}>
            Changer les images
          </Button>
        </div>
        <CountPage newCount={vote} />
      </Layout.Content>
    </Layout>
  );
};

export default HomePage;
