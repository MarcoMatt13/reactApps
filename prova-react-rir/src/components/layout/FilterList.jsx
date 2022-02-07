import React from "react";
import ReactDOM from "react-dom";
import { Radio, Input, Space, Checkbox } from "antd";
import "antd/dist/antd.css";

const FilterList = (props) => {
  return (
    <Checkbox.Group onChange={props.filterExp} style={{ padding: "20px" }}>
      <Space direction="vertical">
        {props.contents.map((elem, index) => {
          return (
            <Checkbox value={elem} key={index}>
              {elem}
            </Checkbox>
          );
        })}
      </Space>
    </Checkbox.Group>
  );
};

export default FilterList;
