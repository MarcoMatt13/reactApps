import React from "react";
import { Radio, Space } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";

const FilterList = ({ filterExp }) => {
  const state = {
    value: 1,
  };

  function onChange(e) {
    const valueSelected = e.target.value;
    return valueSelected;
  }

  return (
    <Radio.Group
      onChange={filterExp}
      valueSelected={onChange}
      style={{ padding: "30px" }}
    >
      <Space direction="vertical">
        <Radio value="1">Display id 1</Radio>
        <Radio value="2">Display id 2</Radio>
        <Radio value="3">Display id 3</Radio>
      </Space>
    </Radio.Group>
  );
};

export default FilterList;
