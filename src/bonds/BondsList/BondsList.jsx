import React from "react";
import { List } from "antd";
import "./BoundsList.css";
import { Routes } from "../../utils";

const data = [
  {
    title: "NII CAPITAL",
    id: "US67021BAE92",
  },
];

function BondsList() {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            className="list-item"
            title={<a href={Routes.BondDetails(item.id)}>{item.title}</a>}
            description="Some text"
          />
        </List.Item>
      )}
    />
  );
}

export default BondsList;
