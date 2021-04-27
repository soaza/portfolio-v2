import * as react from "react";
import { Typography, Row, Col, Progress } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: [
    "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js", // icon-javascript, icon-java, icon-shoppingcart (overrided)
    "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js", // icon-shoppingcart, icon-python
  ],
});

const { Text, Title } = Typography;
const TechStack: React.FC = () => {
  return (
    <>
      <Title
        style={{
          fontFamily: "Roboto Slab",
          textAlign: "center",
        }}
      >
        Technical Skillsets
      </Title>

      <Title style={{ textAlign: "center" }} level={3}>
        Languages
      </Title>
      <Row justify="center">
        <Col span={3}>
          <IconFont
            style={{ marginLeft: "50px", fontSize: "60px" }}
            type="icon-javascript"
          />
        </Col>

        <Col span={9}>
          <Text style={{ fontSize: "30px" }}>Javascript</Text>

          <Progress
            style={{ width: "80%" }}
            percent={50}
            showInfo={false}
            strokeColor="green"
          />
        </Col>
      </Row>
      <Row justify="center">
        <Title level={3}>Frameworks</Title>
      </Row>
    </>
  );
};

export default TechStack;
