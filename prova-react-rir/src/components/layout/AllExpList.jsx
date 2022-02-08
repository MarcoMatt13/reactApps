import SingleExp from "./SingleExp";
import { List } from "antd";

const AllExpList = (props) => {
  return (
    <div>
      <List
        grid={{
          xs: 1,
          sm: 1,
          md: 2,
          lg: 2,
          xl: 3,
          xxl: 4,
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

export default AllExpList;
