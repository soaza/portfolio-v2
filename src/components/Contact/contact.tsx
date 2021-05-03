import { Typography, Row } from "antd";
import {
  GithubOutlined,
  MailOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const Contact: React.FC = () => {
  return (
    <div style={{ backgroundColor: "black", height: "200px" }}>
      <div style={{ backgroundColor: "black", height: "60px" }}></div>
      <Title
        id="contact"
        style={{
          color: "white",
          fontFamily: "Roboto Slab",
          textAlign: "center",
        }}
      >
        Contact Me
      </Title>

      <Row justify="center">
        <GithubOutlined
          onClick={() => window.open("https://github.com/soaza", "_blank")}
          style={{ color: "white", fontSize: "50px", marginRight: "40px" }}
        />
        <MailOutlined
          onClick={() => window.open("mailto:chukimguan@gmail.com", "_blank")}
          style={{ color: "white", fontSize: "50px", marginRight: "40px" }}
        />
        <LinkedinOutlined
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/chu-kim-guan-a78834198/",
              "_blank"
            )
          }
          style={{ color: "white", fontSize: "50px" }}
        />
      </Row>
    </div>
  );
};
export default Contact;
