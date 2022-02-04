import React from "react";
import ReactDOM from "react-dom";
import { Radio, Input, Space } from "antd";
import "antd/dist/antd.css";
import classes from "./prova.module.css";

const FilterList = () => {
  const state = {
    value: 1,
  };

  function onChange(e) {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
  const { value } = state;

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio className={classes.text} value={1}>
          Option A
        </Radio>
        <Radio className={classes.text} value={2}>
          Option B
        </Radio>
        <Radio className={classes.text} value={3}>
          Option C
        </Radio>
      </Space>
    </Radio.Group>
  );
};

export default FilterList;
