import React, { FC } from "react";
import { Layout, Menu, Typography } from "antd";
import { Link } from "react-scroll";

const { useState } = React;
const { Text } = Typography;
const MenuOptions = [
  {
    link: "about",
    text: "About Me",
  },
  {
    link: "tech",
    text: "Technical Skillsets",
  },
  {
    link: "project",
    text: "Projects",
  },
  {
    link: "work",
    text: "Work Experience",
  },
  {
    link: "contact",
    text: "Contact Me",
  },
];

const Navbar: FC = () => {
  const s = {
    color: "black",
    fontFamily: "Roboto Slab",
    fontSize: "24px",
  };

  return (
    <ul
      style={{
        marginTop: "20px",
        height: "40px",
        display: "flex",
        listStyle: "none",
        justifyContent: "space-around",
      }}
    >
      {MenuOptions.map((option) => {
        return (
          <li>
            <Link to={option.link} spy={true} smooth={true}>
              <Text style={s}>{option.text}</Text>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
