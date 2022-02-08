import React from "react";
import { Card, Avatar, Button } from "antd";
import classes from "./general.module.css";
const singleExp = (props) => {
  const { Meta } = Card;

  return (
    <Card
      style={{ width: 350 }}
      cover={<img alt="example" src={props.image} />}
      type="inner"
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={props.title}
        description={props.description}
      />
    </Card>
  );
};

export default singleExp;
