import React from "react";
import { Card, Avatar } from "antd";

const singleExp = (props) => {
  const { Meta } = Card;

  function showId() {
    console.log(props.id);
    return props.id;
  }

  return (
    <div>
      <Card
        onClick={showId}
        style={{ width: 350 }}
        cover={<img alt="example" src={props.image} />}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={props.title}
          description={props.description}
        />
      </Card>
    </div>
  );
};

export default singleExp;
