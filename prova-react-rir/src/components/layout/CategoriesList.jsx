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
      title: "Baite e Rifugi",
      key: "Baite e Rifugi",
      children: [
        {
          title: "Baita di montagna",
          key: "Baita di montagna",
        },
        {
          title: "Rifugio",
          key: "Rifugio",
        },
        {
          title: "Baita privata",
          key: "Baita privata",
        },
      ],
    },
    {
      title: "Ristorazione",
      key: "Ristorazione",
      children: [
        {
          title: "Bar",
          key: "Bar",
        },
        {
          title: "Ristorante di Montagna",
          key: "Ristorante di Montagna",
        },
        {
          title: "Ristorante con giardino",
          key: "Ristorante con giardino",
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
