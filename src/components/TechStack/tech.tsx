import * as react from "react";
import { Typography, Row, Col, Progress } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";

const languages = [
  {
    text: "Javascript",
    icon: "devicon-javascript-plain colored",
    percent: 80,
  },
  { text: "Python", icon: "devicon-python-plain colored", percent: 70 },
  { text: "Java", icon: "devicon-java-plain colored", percent: 60 },
  { text: "C", icon: "devicon-c-plain colored", percent: 50 },
];

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
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.11.0/devicon.min.css"
      />

      <div id="tech">
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
          {languages.map((language) => {
            return (
              <>
                <Col style={{ fontSize: "60px", textAlign: "end" }} span={3}>
                  <i
                    style={{ marginRight: "10px" }}
                    className={language.icon}
                  ></i>
                </Col>

                <Col span={9}>
                  <Row>
                    <Text style={{ fontSize: "20px" }}>{language.text}</Text>
                  </Row>
                  <Progress
                    style={{ width: "80%" }}
                    percent={language.percent}
                    showInfo={false}
                    strokeColor="lightgreen"
                  />
                </Col>
              </>
            );
          })}
        </Row>

        <Row justify="center">
          <Title level={3}>Frameworks</Title>
        </Row>
        <div style={{ height: "400px" }}></div>
      </div>
    </>
  );
};

export default TechStack;
