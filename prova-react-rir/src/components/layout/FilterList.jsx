import React from "react";
import ReactDOM from "react-dom";
import { Radio, Input, Space } from "antd";
import "antd/dist/antd.css";
import classes from "./prova.module.css";
import Grid from "./Grid";

const FilterList = ({ filterExp }) => {
  const state = {
    value: 1,
  };

  return (
    <Radio.Group onChange={filterExp} style={{ padding: "20px" }}>
      <Space direction="vertical">
        <Radio value="1">Display id 1</Radio>
        <Radio value="2">Display id 2</Radio>
        <Radio value="3">Display id 3</Radio>
        <Radio value="4">Display id 4</Radio>
        <Radio value="5">Display id 5</Radio>
      </Space>
    </Radio.Group>
  );
};

export default FilterList;
