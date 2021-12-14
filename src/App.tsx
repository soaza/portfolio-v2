import React, { FC } from "react";
import "./App.css";
import { Typography, Col, Row, Divider, Affix, Button, Grid } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import Typewriter from "typewriter-effect";
import Navbar from "./components/Navigation/navbar";
import AboutMe from "./components/AboutMe/aboutme";
import Project from "./components/MyProjects/projects";
import TechStack from "./components/TechStack/tech";
import WorkExperience from "./components/WorkExperience/workexp";
import Contact from "./components/Contact/contact";
import WorkExperienceMobile from "./components/WorkExperience/workexpmobile";
import FadeIn from "react-fade-in";

const { Title, Link } = Typography;
const { useState } = React;

const App: FC = () => {
  const bp = Grid.useBreakpoint();
  const isWeb = bp.lg;
  const [showTypewriter, setShowTypewriter] = useState(true);
  const [textColor, setTextColor] = useState("black");
  return (
    <html>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto Slab"
        rel="stylesheet"
      />

      {(!showTypewriter || !isWeb) && (
        <>
          <Affix
            style={{ zIndex: 1, position: "fixed", bottom: 10, right: 10 }}
          >
            <Button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1HQYe2O6DMTIdooZORLkN1XC97Ft006b_/view?usp=sharing"
                )
              }
              style={{ borderRadius: 10 }}
              type="primary"
            >
              My Resume
            </Button>
          </Affix>

          <Row justify="space-between">
            <Col span={24} lg={8}>
              <AboutMe />
            </Col>

            <Col span={24} lg={16}>
              <TechStack />
              <Divider />

              {isWeb && (
                <FadeIn>
                  <Project />
                </FadeIn>
              )}

              {!isWeb && <Project />}
              <Divider />

              {isWeb ? <WorkExperience /> : <WorkExperienceMobile />}

              <Contact />
            </Col>
          </Row>
        </>
      )}
      {isWeb && showTypewriter && (
        <>
          <Row justify="center">
            <Col span={20}>
              <Title
                style={{
                  fontSize: "90px",
                  fontFamily: "Roboto Slab",
                  textAlign: "center",
                  marginTop: "20%",
                }}
              >
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .changeDelay(35)
                      .typeString("Hi, I am Kim Guan")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Welcome to my website.")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Lets get started,shall we?")
                      .pauseFor(1000)
                      // .deleteAll()
                      .callFunction(() => setShowTypewriter(false))

                      .start();
                  }}
                />
              </Title>
              <Link
                onMouseEnter={() => setTextColor("grey")}
                onMouseLeave={() => setTextColor("black")}
              >
                <Title
                  onClick={() => setShowTypewriter(false)}
                  style={{
                    opacity: 0.8,
                    color: textColor,
                    fontSize: "20px",
                    fontFamily: "Roboto Slab",
                    textAlign: "right",
                  }}
                >
                  Skip intro
                  <CaretRightOutlined />
                </Title>
              </Link>
            </Col>
          </Row>
        </>
      )}
    </html>
  );
};

export default App;
