import { Row, Col } from "antd";
import SingleExp from "../SingleExp";
const Grid = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <SingleExp id="1"></SingleExp>
        </Col>
        <Col span={6} />
        <Col span={6}>
          <SingleExp id="2"></SingleExp>
        </Col>{" "}
        <Col span={6}>
          <SingleExp id="3"></SingleExp>
        </Col>
        <Col span={6} />
        <Col span={6}>
          <SingleExp id="4"></SingleExp>
        </Col>{" "}
        <Col span={6} />
        <Col span={6}>
          <SingleExp id="5"></SingleExp>
        </Col>{" "}
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={6} />
        <Col span={6} />
        <Col span={6} />
        <Col span={6} />
      </Row>{" "}
    </div>
  );
};

export default Grid;
