import { Row, Col } from "antd";
import SingleExp from "./SingleExp";
import { Space } from "antd";

const AllExp = (props) => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        {props.elements.map((exp) => {
          return (
            <Space size="large" key={exp.id}>
              <Col span={12} key={exp.id}>
                <SingleExp
                  id={exp.id}
                  title={exp.title}
                  image={exp.image}
                  description={exp.description}
                ></SingleExp>
              </Col>
            </Space>
          );
        })}
      </Row>
    </div>
  );
};

export default AllExp;
