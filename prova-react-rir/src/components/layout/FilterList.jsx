import React from "react";
import ReactDOM from "react-dom";
import { Radio, Input, Space } from "antd";
import "antd/dist/antd.css";
import classes from "./prova.module.css";
import Grid from "./Grid";

const FilterList = (props) => {
  const state = {
    value: 1,
  };

  return (
    <Radio.Group onChange={props.filterExp} style={{ padding: "20px" }}>
      <Space direction="vertical">
        {props.contents.map((exp, index) => {
          return (
            <Radio value={index} key={index} name={exp}>
              {exp}
            </Radio>
          );
        })}
      </Space>
    </Radio.Group>
  );
};

export default FilterList;
