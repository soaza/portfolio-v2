import * as react from "react";
import { Typography, Row, Col } from "antd";
import ProfilePic from "../../images/profile_pic_circle.png";

const { Text, Title } = Typography;
const AboutMe: React.FC = () => {
  return (
    <>
      <div id="aboutme">
        <Title
          id="aboutme"
          style={{
            fontSize: "80px",
            fontFamily: "Roboto Slab",
            textAlign: "center",
            marginBottom: "0px",
          }}
        >
          Kim Guan
        </Title>
        <Title
          level={4}
          style={{
            marginTop: "0px",

            fontSize: "30px",
            fontFamily: "Roboto Slab",
            textAlign: "center",
          }}
        >
          <strong>
            Developer-<i>slash</i>-innovator
          </strong>
        </Title>
        <Row justify="center">
          <img
            style={{ marginBottom: "24px" }}
            height="250em"
            object-fit="contain"
            src={ProfilePic}
          ></img>
        </Row>
        <Row justify="center">
          <Col style={{ textAlign: "center" }} span={20}>
            <Text
              style={{
                fontSize: "20px",
                fontFamily: "Roboto Slab",
                textAlign: "center",
              }}
            >
              I am Kim Guan, a Year 3 Computer Science student at the National
              University of Singapore,
              <br />
              an aspiring full-stack developer and also a self-proclaimed Disney
              movie junkie.
            </Text>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AboutMe;
