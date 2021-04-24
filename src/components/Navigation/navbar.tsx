import React, { FC } from "react";
import { Layout, Menu, Typography } from "antd";
import { Link } from "react-scroll";

const { Text } = Typography;

const Navbar: FC = () => {
  return (
    <div style={{ background: "orange" }}>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around",
        }}
      >
        <li>
          <Link to="about" spy={true} smooth={true}>
            <Text style={{ fontSize: "24px" }}>About</Text>
          </Link>
        </li>
        <li>
          <Link to="tech" spy={true} smooth={true}>
            <Text style={{ fontSize: "24px" }}>Technical Skillsets</Text>
          </Link>
        </li>
        <li>
          <Link to="project" spy={true} smooth={true}>
            <Text style={{ fontSize: "24px" }}>Projects</Text>
          </Link>
        </li>
        <li>
          <Link to="project" spy={true} smooth={true}>
            <Text style={{ fontSize: "24px" }}>Work Experience</Text>
          </Link>
        </li>
        <li>
          <Link to="project" spy={true} smooth={true}>
            <Text style={{ fontSize: "24px" }}>Contact Me</Text>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
