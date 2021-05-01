import * as react from "react";
import { Typography, Row, Col, Progress, Card } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";

const languages = [
  {
    text: "Javascript",
    icon: "devicon-javascript-plain colored",
    percent: 80,
  },
  {
    text: "Typescript",
    icon: "devicon-typescript-plain colored",
    percent: 80,
  },
  { text: "Python", icon: "devicon-python-plain colored", percent: 70 },
  { text: "Java", icon: "devicon-java-plain colored", percent: 60 },
  // { text: "C", icon: "devicon-c-plain colored", percent: 50 },
];

const frontendTools = [
  {
    text: "React",
    icon: "devicon-react-plain colored",
    percent: 80,
  },
  { text: "HTML", icon: "devicon-html5-plain colored", percent: 80 },
  { text: "CSS", icon: "devicon-css3-plain colored", percent: 60 },
  { text: "Bootstrap", icon: "devicon-bootstrap-plain colored", percent: 50 },
  { text: "GatsbyJS", icon: "devicon-gatsby-plain colored", percent: 50 },
  { text: "Django", icon: "devicon-django-plain colored", percent: 50 },
];

const backendTools = [
  { text: "PostgreSQL", icon: "devicon-postgresql-plain colored", percent: 80 },
  { text: "MySQL", icon: "devicon-mysql-plain colored", percent: 80 },
  {
    text: "Django",
    icon: "devicon-django-plain colored",
    percent: 70,
  },
  { text: "ExpressJS", icon: "devicon-express-original-wordmark", percent: 50 },
  {
    text: "NodeJS",
    icon: "devicon-nodejs-plain-wordmark colored",
    percent: 50,
  },

  { text: "Flask", icon: "devicon-flask-plain colored", percent: 50 },
];

const otherTools = [
  { text: "Git", icon: "devicon-git-plain colored", percent: 80 },
];

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
            marginTop: "50px",
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
          <Title level={3}>Front-end</Title>
        </Row>

        <Row justify="center">
          {frontendTools.map((frontend) => {
            return (
              <>
                <Col style={{ fontSize: "60px", textAlign: "end" }} span={3}>
                  <i
                    style={{ marginRight: "10px" }}
                    className={frontend.icon}
                  ></i>
                </Col>

                <Col span={9}>
                  <Row>
                    <Text style={{ fontSize: "20px" }}>{frontend.text}</Text>
                  </Row>
                  <Progress
                    style={{ width: "80%" }}
                    percent={frontend.percent}
                    showInfo={false}
                    strokeColor="lightgreen"
                  />
                </Col>
              </>
            );
          })}
        </Row>

        <Row justify="center">
          <Title level={3}>Back-end</Title>
        </Row>

        <Row justify="center">
          {backendTools.map((backend) => {
            return (
              <>
                <Col style={{ fontSize: "60px", textAlign: "end" }} span={3}>
                  <i
                    style={{ marginRight: "10px" }}
                    className={backend.icon}
                  ></i>
                </Col>

                <Col span={9}>
                  <Row>
                    <Text style={{ fontSize: "20px" }}>{backend.text}</Text>
                  </Row>
                  <Progress
                    style={{ width: "80%" }}
                    percent={backend.percent}
                    showInfo={false}
                    strokeColor="lightgreen"
                  />
                </Col>
              </>
            );
          })}
        </Row>

        <Row justify="center">
          <Title level={3}>Other Tools</Title>
        </Row>

        <Row justify="center">
          {otherTools.map((othertool) => {
            return (
              <>
                <Col style={{ fontSize: "60px", textAlign: "end" }} span={3}>
                  <i
                    style={{ marginRight: "10px" }}
                    className={othertool.icon}
                  ></i>
                </Col>

                <Col span={9}>
                  <Row>
                    <Text style={{ fontSize: "20px" }}>{othertool.text}</Text>
                  </Row>
                  <Progress
                    style={{ width: "80%" }}
                    percent={othertool.percent}
                    showInfo={false}
                    strokeColor="lightgreen"
                  />
                </Col>
              </>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default TechStack;
