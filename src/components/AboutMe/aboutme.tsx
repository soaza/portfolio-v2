import * as react from "react";
import { Typography, Row, Col } from "antd";
import ProfilePic from "../../images/profile_pic_circle.png";

const { Text, Title } = Typography;
const AboutMe: React.FC = () => {
  return (
    <>
      <Title
        style={{
          fontSize: "100px",
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

          fontSize: "50px",
          fontFamily: "Roboto Slab",
          textAlign: "center",
        }}
      >
        <strong>Web Developer</strong>
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
        <Text
          style={{
            fontSize: "30px",
            fontFamily: "Roboto Slab",
            textAlign: "center",
          }}
        >
          I am Kim Guan, a Year 2 Computer Science and an aspiring full-stack
          developer.
        </Text>
      </Row>
    </>
  );
};

export default AboutMe;
