import * as react from "react";
import { Typography, Row, Col } from "antd";
import ProfilePic from "../../images/profile_pic.jpg";

const { Title } = Typography;

const Project: React.FC = () => {
  return (
    <>
      <Title
        style={{
          fontFamily: "Roboto Slab",
          textAlign: "center",
        }}
      >
        My Projects
      </Title>
      <Row>
        <Col span={12}>
          <img
            style={{ marginLeft: "40px" }}
            height="75%"
            width="75%"
            object-fit="contain"
            src={ProfilePic}
          ></img>
        </Col>

        <Col></Col>
      </Row>
    </>
  );
};

export default Project;
