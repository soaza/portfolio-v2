import React, { FC } from "react";
import { Button } from "antd";
import "./App.css";
import Navbar from "./components/Navigation/navbar";
import AboutMe from "./components/AboutMe/aboutme";
import Project from "./components/MyProjects/projects";

const App: FC = () => {
  return (
    <>
      <html>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto Slab"
          rel="stylesheet"
        />

        <Navbar />
        <div id="about">
          <AboutMe />
        </div>
        <div id="project">
          <Project />
        </div>
      </html>
    </>
  );
};

export default App;
