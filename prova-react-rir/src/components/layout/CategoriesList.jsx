import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Tree } from "antd";
import classes from "./general.module.css";

const CategoriesList = (props) => {
  return (
    <Tree
      checkable
      selectable={false}
      onExpand={props.onExpand}
      expandedKeys={props.expandedKeys}
      autoExpandParent={props.autoExpandParent}
      onCheck={props.onCheck}
      checkedKeys={props.checkedKeys}
      treeData={props.treeData}
      className={classes.filtersBackground}
      style={{ padding: "20px" }}
    />
  );
};

export default CategoriesList;
