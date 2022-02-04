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

  function onChange(e) {
    console.log(e.target.value);
    const valueSelected = e.target.value;
    return valueSelected;
  }

  return (
    <Radio.Group onChange={onChange} valueSelected={onChange}>
      <Space direction="vertical">
        <Radio className={classes.text} value="1">
          Display id 1
        </Radio>
        <Radio className={classes.text} value="2">
          Display id 2
        </Radio>
        <Radio className={classes.text} value="3">
          Display id 3
        </Radio>
      </Space>
    </Radio.Group>
  );
};

export default FilterList;
