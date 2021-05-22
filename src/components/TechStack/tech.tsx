import { Typography, Row, Col, Progress, Card } from "antd";

const Fade = require("react-reveal/Fade");

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

const skillSets = [
  { title: "Languages", arr: languages },
  { title: "Front-end", arr: frontendTools },
  { title: "Back-end", arr: backendTools },
  { title: "Other Tools", arr: otherTools },
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

        {skillSets.map((skillsetArea) => {
          return (
            <Fade bottom>
              <>
                <Title style={{ textAlign: "center" }} level={3}>
                  {skillsetArea.title}
                </Title>

                <Row justify="center">
                  {skillsetArea.arr.map((skillset) => {
                    return (
                      <>
                        <Col
                          style={{ fontSize: "60px", textAlign: "end" }}
                          span={3}
                        >
                          <i
                            style={{ marginRight: "10px" }}
                            className={skillset.icon}
                          ></i>
                        </Col>

                        <Col span={9}>
                          <Row>
                            <Text style={{ fontSize: "20px" }}>
                              {skillset.text}
                            </Text>
                          </Row>
                          <Progress
                            style={{ width: "80%" }}
                            percent={skillset.percent}
                            showInfo={false}
                            strokeColor="lightgreen"
                          />
                        </Col>
                      </>
                    );
                  })}
                </Row>
              </>
            </Fade>
          );
        })}
      </div>
    </>
  );
};

export default TechStack;
