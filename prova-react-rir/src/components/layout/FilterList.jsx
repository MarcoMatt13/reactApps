import React from "react";
import ReactDOM from "react-dom";
import { Radio, Input, Space } from "antd";
import "antd/dist/antd.css";

const FilterList = (props) => {
  return (
    <Radio.Group onChange={props.filterExp} style={{ padding: "20px" }}>
      <Space direction="vertical">
        {props.contents.map((elem, index) => {
          return (
            <Radio value={index} key={index}>
              {elem}
            </Radio>
          );
        })}
      </Space>
    </Radio.Group>
  );
};

export default FilterList;
