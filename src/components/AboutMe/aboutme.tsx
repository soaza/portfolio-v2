import { Typography, Row, Col, Grid } from "antd";
import ProfilePic from "../../images/profile_pic_circle.png";
import { Link } from "react-scroll";

const { Text, Title } = Typography;

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
  // {
  //   link: "contact",
  //   text: "Contact Me",
  //   isHovered: false,
  // },
];

const s = {
  fontFamily: "Roboto Slab",
  fontSize: "24px",
};

const AboutMe: React.FC = () => {
  const bp = Grid.useBreakpoint();
  const isWeb = bp.lg;

  return (
    <>
      <div
        style={{
          height: "100%",
          width: isWeb ? 500 : "80vw",
          position: isWeb ? "fixed" : "unset",
          marginLeft: 30,
        }}
        id="aboutme"
      >
        <Title
          id="aboutme"
          style={{
            fontSize: "80px",
            fontFamily: "Roboto Slab",
            marginBottom: "0px",
          }}
        >
          Kim Guan
        </Title>
        <Title
          level={4}
          style={{
            marginTop: "0px",
            fontSize: "30px",
            fontFamily: "Roboto Slab",
          }}
        >
          <strong>Developer</strong>
        </Title>

        <p>
          <Text
            style={{
              fontSize: "20px",
              fontFamily: "Roboto Slab",
              color: "gray",
            }}
          >
            I am Kim Guan, a Year 3 Computer Science student at the National
            University of Singapore,
            <br />
            an aspiring full-stack developer and also a self-proclaimed Disney
            movie junkie.
          </Text>
        </p>

        <Row>
          <img
            style={{ marginBottom: "24px" }}
            height="200em"
            object-fit="contain"
            src={ProfilePic}
          ></img>
        </Row>

        {isWeb && (
          <ul
            style={{
              listStyle: "none",
              padding: 0,
            }}
          >
            {MenuOptions.map((option, i) => {
              return (
                <li>
                  <Link to={option.link} spy={true} smooth={true}>
                    <Text key={i} style={{ ...s }}>
                      {option.text}
                    </Text>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default AboutMe;
