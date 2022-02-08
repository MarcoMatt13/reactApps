import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Tree } from "antd";
import classes from "./general.module.css";

const CategoriesList = (props) => {
  const treeData = [
    {
      title: "Alloggi",
      key: "Alloggi",
      children: [
        {
          title: "Hotel",
          key: "Hotel",
        },
        {
          title: "Garni",
          key: "Garni",
        },
        {
          title: "Pensione",
          key: "Pensione",
        },
      ],
    },
    {
      title: "0-1",
      key: "0-1",
      children: [
        {
          title: "0-1-0-0",
          key: "0-1-0-0",
        },
        {
          title: "0-1-0-1",
          key: "0-1-0-1",
        },
        {
          title: "0-1-0-2",
          key: "0-1-0-2",
        },
      ],
    },
    {
      title: "0-2",
      key: "0-2",
      children: [
        {
          title: "0-2-0-0",
          key: "0-2-0-0",
        },
        {
          title: "0-2-0-2",
          key: "0-2-0-2",
        },
        {
          title: "0-2-0-3",
          key: "0-2-0-3",
        },
      ],
    },
  ];

  const [expandedKeys, setExpandedKeys] = useState([]);
  const [checkedKeys, setCheckedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onExpand = (expandedKeysValue) => {
    console.log("onExpand", expandedKeysValue); // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.

    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onCheck = (checkedKeysValue) => {
    console.log("onCheck", checkedKeysValue);
    setCheckedKeys(checkedKeysValue);
  };

  return (
    <Tree
      checkable
      selectable={false}
      onExpand={onExpand}
      expandedKeys={expandedKeys}
      autoExpandParent={autoExpandParent}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
      treeData={treeData}
      className={classes.filtersBackground}
      style={{ padding: "20px" }}
    />
  );
};

export default CategoriesList;
