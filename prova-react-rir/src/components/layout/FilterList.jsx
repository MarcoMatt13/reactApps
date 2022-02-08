import React from "react";
import ReactDOM from "react-dom";
import { Radio, Input, Space, Checkbox } from "antd";
import "antd/dist/antd.css";
import classes from "./general.module.css";

const FilterList = (props) => {
  return (
    <div className={classes.filtersBackground}>
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
    </div>
  );
};

export default FilterList;
