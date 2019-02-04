import React, { useState, useEffect } from "react";
import { Table, Avatar } from "antd";
import { toast, ToastContainer } from "react-toastify";
import api from "../../api";

/*
 interface cats = {
  image 
  rating 
  nombre de votes
}
*/

const columns = [
  {
    title: "Image",
    key: "image",
    dataIndex: "image",
    render: text => {
      return <Avatar shape="square" size={64} src={text} />;
    },
    align: "center"
  },
  {
    title: "Nombre de votes",
    dataIndex: "votes",
    key: "votes"
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating"
  }
];

const ResultPage = () => {
  const [cats, updateCats] = useState([]);
  const [loading, updateLoading] = useState(false);

  const onInitialRender = () => {
    updateLoading(true);
    api.cats
      .getAllOrdered()
      .then(res => {
        updateLoading(false);
        updateCats(res);
      })
      .catch(() => toast.error("un probleme est survenu avec le serveur"));
  };

  useEffect(onInitialRender, []);

  return (
    <div>
      <ToastContainer />
      <Table
        rowKey={record => record.ID}
        key={record => record.ID}
        loading={loading}
        dataSource={cats}
        columns={columns}
      />
    </div>
  );
};

export default ResultPage;
