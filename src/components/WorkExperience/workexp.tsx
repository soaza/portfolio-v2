import * as react from "react";
import { Typography, Card, Timeline, Tag, Row } from "antd";
import NUSLogo from "../../images/NUS_Logo.jpeg";
import NTUCLogo from "../../images/NTUC_Income_logo.jpeg";
import WorkclassLogo from "../../images/workclass-logo.png";

const { Title, Text } = Typography;

const WorkExperience: React.FC = () => {
  return (
    <>
      <Title
        id="work"
        style={{
          marginTop: "30px",
          fontFamily: "Roboto Slab",
          textAlign: "center",
        }}
      >
        Work Experience
      </Title>

      <Timeline mode="alternate" reverse>
        <Timeline.Item
          label={
            <Title
              style={{
                fontSize: "18px",
                fontFamily: "Helvetica",
                textAlign: "left",
                marginBottom: "0px",
              }}
              level={3}
            >
              August 2019
            </Title>
          }
        >
          <Card style={{ marginRight: "20px" }}>
            <Title
              style={{
                fontSize: "18px",
                fontFamily: "Helvetica",
                textAlign: "left",
                marginBottom: "0px",
              }}
              level={3}
            >
              Started school at NUS School of Computing: Computer Science
            </Title>
            <div style={{ textAlign: "center" }}>
              <img width="40%" src={NUSLogo}></img>

              <Title
                style={{
                  fontSize: "16px",
                  fontFamily: "Helvetica",
                  marginBottom: "0px",
                  textDecoration: "underline",
                }}
                level={3}
              >
                Academic Year 1 / Semester 1
              </Title>
              <Text>
                CS1101S: Programming Methodology <br />
                CS1231S: Discrete Structures <br />
                MA1101R: Linear Algebra
              </Text>

              <Title
                style={{
                  fontSize: "16px",
                  fontFamily: "Helvetica",
                  marginBottom: "0px",
                  textDecoration: "underline",
                }}
                level={3}
              >
                Academic Year 1 / Semester 2
              </Title>
              <Text>
                CS2030: Programming Methodology II <br />
                CS2040S: Introduction to Data Structures and Algorithms <br />
                MA1521: Calculus for Computing
              </Text>
            </div>
          </Card>
        </Timeline.Item>

        <Timeline.Item
          label={
            <Title
              style={{
                fontSize: "18px",
                fontFamily: "Helvetica",
                textAlign: "right",
                marginBottom: "0px",
              }}
              level={3}
            >
              May 2020 - Aug 2020
            </Title>
          }
        >
          <Card style={{ marginLeft: "20px" }}>
            <Title
              style={{
                fontSize: "18px",
                fontFamily: "Helvetica",
                textAlign: "center",
                marginBottom: "0px",
              }}
              level={3}
            >
              Summer Software Engineer Intern at NTUC Income
            </Title>
            <div style={{ textAlign: "center" }}>
              <img width="50%" src={NTUCLogo}></img>
            </div>

            <Text style={{ textAlign: "left" }}>
              <ul>
                <li>
                  Responsible for data mining logs from Kibana and writing my
                  own python scripts to present the data in a CSV format for
                  better readability.
                </li>
                <li>
                  Worked on Integrated Access Management(IAM) System project ,
                  an interface for performing User Access Management activities
                  including creating, deleting and amending roles manually with
                  integration with ELK.
                </li>
                <li>
                  Provided and created API documentation for IAM to be used in
                  future stages. Provided backend integration with Kibana using
                  Flask framework and integrated it with IAM.
                </li>
              </ul>
            </Text>
          </Card>
        </Timeline.Item>

        <Timeline.Item
          label={
            <Title
              style={{
                fontSize: "18px",
                fontFamily: "Helvetica",
                textAlign: "left",
                marginBottom: "0px",
              }}
              level={3}
            >
              Aug 2020 - May 2021
            </Title>
          }
        >
          <Card style={{ marginRight: "20px" }}>
            <div style={{ textAlign: "center" }}>
              <Title
                style={{
                  fontSize: "16px",
                  fontFamily: "Helvetica",
                  marginBottom: "0px",
                  textDecoration: "underline",
                }}
                level={3}
              >
                Academic Year 2 / Semester 1
              </Title>
              <Text>
                CS2103T: Software Engineering <br />
                CS2100: Computer Organisation <br />
              </Text>

              <Title
                style={{
                  fontSize: "16px",
                  fontFamily: "Helvetica",
                  marginBottom: "0px",
                  textDecoration: "underline",
                }}
                level={3}
              >
                Academic Year 2 / Semester 2
              </Title>
              <Text>
                CS2102: Database Systems <br />
                CS2105: Computer Networks <br />
                CS3243: Introduction to Articial Intelligence
              </Text>
            </div>
          </Card>
        </Timeline.Item>

        <Timeline.Item
          label={
            <Title
              style={{
                fontSize: "18px",
                fontFamily: "Helvetica",
                textAlign: "right",
                marginBottom: "0px",
              }}
              level={3}
            >
              Feb 2021 - Present
            </Title>
          }
        >
          <Card style={{ marginRight: "20px" }}>
            <Title
              style={{
                fontSize: "18px",
                fontFamily: "Helvetica",
                textAlign: "center",
                marginBottom: "0px",
              }}
              level={3}
            >
              Feb 2021 - Present: Full-stack Software Engineer Intern at
              Workclass.co
            </Title>
            <div
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              <img width="50%" src={WorkclassLogo}></img>
            </div>

            <Text style={{ textAlign: "left" }}>
              <ul>
                <Row>
                  <Tag color="blue">React</Tag>
                  <Tag color="green">Django</Tag>
                  <Tag color="purple">Gatsby.JS</Tag>
                  <Tag color="orange">Cypress.JS</Tag>
                </Row>

                <li>
                  Responsible for writing code that is used in production by
                  over 60,000 users
                </li>
                <li>
                  Took ownership of own projects and maintained code by writing
                  own testcases using Cypress.JS
                </li>
                <li>
                  Wrote RESTful APIs to support front-end features on a regular
                  basis.
                </li>
              </ul>
            </Text>
          </Card>
        </Timeline.Item>
      </Timeline>
    </>
  );
};

export default WorkExperience;
