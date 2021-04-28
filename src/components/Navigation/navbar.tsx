import React, { FC } from "react";
import { Layout, Menu, Typography } from "antd";
import { Link } from "react-scroll";

const { useState } = React;
const { Text } = Typography;
const MenuOptions = [
  //
  {
    link: "tech",
    text: "Technical Skillsets",
    isHovered: false,
  },
  {
    link: "project",
    text: "Projects",
    isHovered: false,
  },
  {
    link: "work",
    text: "Work Experience",
    isHovered: false,
  },
  {
    link: "contact",
    text: "Contact Me",
    isHovered: false,
  },
];
console.log(MenuOptions);

const Navbar: FC = () => {
  const s = {
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
      {MenuOptions.map((option, i) => {
        return (
          <li>
            <Link to={option.link} spy={true} smooth={true}>
              <Text key={i} style={s}>
                {option.text}
              </Text>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
