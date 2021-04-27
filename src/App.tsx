import React, { FC } from "react";
import "./App.css";
import { Typography, Row, Col } from "antd";
import Typewriter from "typewriter-effect";
import FadeIn from "react-fade-in";
import Navbar from "./components/Navigation/navbar";
import AboutMe from "./components/AboutMe/aboutme";
import Project from "./components/MyProjects/projects";
import TechStack from "./components/TechStack/tech";

const { Title } = Typography;
const { useState } = React;

const App: FC = () => {
  const [showTypewriter, setShowTypewriter] = useState(true);
  return (
    <>
      <html>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto Slab"
          rel="stylesheet"
        />
        {!showTypewriter && (
          <FadeIn>
            <Navbar />
            <AboutMe />
            <TechStack />
            <Project />
          </FadeIn>
        )}
        {showTypewriter && (
          <Title
            style={{
              fontSize: "100px",
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
                  .deleteAll()
                  .callFunction(() => setShowTypewriter(false))

                  .start();
              }}
            />
          </Title>
        )}
      </html>
    </>
  );
};

export default App;
