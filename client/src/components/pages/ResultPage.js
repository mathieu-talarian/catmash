import React, { useState, useEffect } from "react";
import { Table, Avatar, Rate, Icon } from "antd";
import { toast, ToastContainer } from "react-toastify";
import api from "../../api";
import toastOptions from "../tools/toastOptions";

/*
 interface cats = {
  image 
  rating 
  nombre de votes
}
*/

const ResultPage = () => {
  const [cats, updateCats] = useState([]);
  const [loading, updateLoading] = useState(false);
  const [max, updateMax] = useState(0);

  const onInitialRender = () => {
    updateLoading(true);
    api.cats
      .getAllOrdered()
      .then(res => {
        updateLoading(false);
        updateMax(res[0].rating);
        updateCats(res);
      })
      .catch(err =>
        toast.error(`un probleme est survenu avec le serveur ${err}`)
      );
  };

  useEffect(onInitialRender, []);

  const columns = [
    {
      title: "Image",
      key: "image",
      dataIndex: "image",
      render: text => <Avatar shape="square" size={64} src={text} />,
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
      key: "rating",
      render: text => {
        const value = (text / max) * 5.0;
        return (
          <Rate
            character={<Icon type="heart" />}
            value={value}
            allowHalf
            disabled
            style={{ color: "red" }}
          />
        );
      }
    }
  ];

  return (
    <div>
      <ToastContainer {...toastOptions} />
      <Table
        max={max}
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
