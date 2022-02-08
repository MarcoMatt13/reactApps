import { Row, Col } from "antd";
import SingleExp from "./SingleExp";
import { Space, List, Card } from "antd";

const AllExp = (props) => {
  return (
    <div>
      <List
        grid={{
          gutter: 8,
          column: 3,
        }}
        dataSource={props.elements}
        renderItem={(item) => (
          <List.Item>
            <SingleExp
              id={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
            ></SingleExp>
          </List.Item>
        )}
      />
    </div>
  );
};

export default AllExp;
