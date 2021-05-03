import * as react from "react";
import { Typography, Row, Col, Timeline } from "antd";
import NUSLogo from "../../images/NUS_Logo.jpeg";

const { Title, Text } = Typography;

const Project: React.FC = () => {
  return (
    <>
      <Title
        id="project"
        style={{
          marginTop: "30px",
          fontFamily: "Roboto Slab",
          textAlign: "center",
        }}
      >
        My Projects
      </Title>

      <div style={{ height: "800px" }}></div>
    </>
  );
};

export default Project;
