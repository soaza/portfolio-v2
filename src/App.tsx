import React, { FC } from "react";
import "./App.css";
import { Typography, Col, Row, Divider } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import Typewriter from "typewriter-effect";
import FadeIn from "react-fade-in";
import Navbar from "./components/Navigation/navbar";
import AboutMe from "./components/AboutMe/aboutme";
import Project from "./components/MyProjects/projects";
import TechStack from "./components/TechStack/tech";
import WorkExperience from "./components/WorkExperience/workexp";
import Contact from "./components/Contact/contact";

const { Title, Link } = Typography;
const { useState } = React;

const App: FC = () => {
  const [showTypewriter, setShowTypewriter] = useState(true);
  const [textColor, setTextColor] = useState("black");
  return (
    <html>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto Slab"
        rel="stylesheet"
      />

      {!showTypewriter && (
        <>
          <Navbar />

          <AboutMe />
          <Divider />

          <TechStack />
          <Divider />

          <Project />
          <Divider />

          <WorkExperience />
          <Divider />

          <Contact />
        </>
      )}
      {showTypewriter && (
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
