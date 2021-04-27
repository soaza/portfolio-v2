import * as react from "react";
import { Typography, Row, Col } from "antd";
import ProfilePic from "../../images/profile_pic.jpg";

const { Title } = Typography;

const Project: React.FC = () => {
  return (
    <>
      <Title
        style={{
          marginTop: "30px",
          fontFamily: "Roboto Slab",
          textAlign: "center",
        }}
      >
        My Projects
      </Title>
    </>
  );
};

export default Project;
