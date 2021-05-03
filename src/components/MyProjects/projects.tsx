import {
  Typography,
  Tabs,
  Card,
  Row,
  Col,
  Carousel,
  Tag,
  Image,
  Button,
} from "antd";

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const badgeMapping = [
  { techstack: "Typescript", color: "#f67e7d" },
  { techstack: "React", color: "blue" },
  { techstack: "ExpressJS", color: "purple" },

  { techstack: "NodeJS", color: "orange" },

  { techstack: "React", color: "blue" },

  { techstack: "PostgresSQL", color: "green" },
  { techstack: "Java", color: "pink" },
];

const projects = [
  {
    type: "Web Development",
    data: [
      {
        title: "Smart Brain",
        techstack: ["React", "PostgresSQL", "ExpressJS", "NodeJS"],
        images: [
          process.env.PUBLIC_URL + "/projectImages/Smartbrain-1.png",
          process.env.PUBLIC_URL + "/projectImages/Smartbrain-2.png",
          process.env.PUBLIC_URL + "/projectImages/Smartbrain-3.png",
        ],
        text: (
          <Text>
            Smart-brain is a full-stack web application which detects human
            faces with an image link, using API from Clarifai face detection
            model.
            <br />
            It tracks user submissions made, with user details stored using
            PostgreSQL database.
          </Text>
        ),
        links: [
          {
            title: "Front-end source code",
            link: "https://github.com/soaza/smart-brain",
          },
          {
            title: "Back-end source code",
            link: "https://github.com/soaza/smart-brain-api",
          },
          {
            title: "Website",
            link: "https://smart-brain-app-kg.herokuapp.com",
          },
        ],
      },
      {
        title: "PokeEncyclopedia",
        techstack: ["React"],
        images: [
          process.env.PUBLIC_URL + "/projectImages/PokeEncyclopedia-1.png",
          process.env.PUBLIC_URL + "/projectImages/PokeEncyclopedia-2.png",
        ],
        text: (
          <Text>
            PokeEncyclopedia is a mini-Pokedex used to showcase the first 151
            pokemons in a single page.
            <br />
            It is built with React framework and uses API from
            https://pokeapi.co/ for the data and https://pokeres.bastionbot.org/
            for the images.
          </Text>
        ),
        links: [
          {
            title: "Source Code",
            link: "https://github.com/soaza/pokeEncyclopedia",
          },
          {
            title: "Website",
            link: "https://soaza.github.io/pokeEncyclopedia/",
          },
        ],
      },
      {
        title: "Pawfriends",
        techstack: ["React", "Typescript"],
        images: [process.env.PUBLIC_URL + "/projectImages/Pawfriends-1.png"],
        text: (
          <Text>
            Pawfriends is a website built for NUS Pawfriends as the official new
            website.
            <br />A dashboard is planned in the future for members of the club
            to customise the details of the website.
          </Text>
        ),
        links: [
          {
            title: "Source Code",
            link: "https://github.com/soaza/pawfriends",
          },
        ],
      },
      {
        title: "Portfolio",
        techstack: ["React", "Typescript"],
        images: [process.env.PUBLIC_URL + "/projectImages/Portfolio-1.png"],
        text: (
          <Text>Built from scratch using React and Ant.Design components.</Text>
        ),
        links: [
          {
            title: "Source Code",
            link: "https://github.com/soaza/portfolio-v2",
          },
        ],
      },
    ],
  },
  {
    type: "Others",
    data: [
      {
        title: "Archangel",
        techstack: ["Java"],
        images: [
          process.env.PUBLIC_URL + "/projectImages/Archangel-1.png",
          process.env.PUBLIC_URL + "/projectImages/Archangel-2.png",
          process.env.PUBLIC_URL + "/projectImages/Archangel-3.png",
        ],
        text: (
          <Text>
            Archangel is a desktop application targeted at clinics for
            scheduling appointments and patient details. While it has a GUI,
            most of the user interactions happen using a CLI (Command Line
            Interface).
            <br></br>It also includes an in-built calendar feature. Archangel
            was my team's project submission for the module CS2103T:Software
            Engineering, with my role being the team leader.
          </Text>
        ),
        links: [
          {
            title: "Source Code",
            link: "https://github.com/AY2021S1-CS2103T-W11-1/tp",
          },
          {
            title: "Video",
            link:
              "https://www.youtube.com/watch?v=DfCUDk3LgPU&feature=youtu.be",
          },
        ],
      },
    ],
  },
];

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

      <Tabs style={{ marginLeft: "20px" }} centered size="large" animated>
        {projects.map((project, i) => {
          return (
            <TabPane tab={project.type} key={i}>
              <Row justify="space-around">
                {project.data.map((project: any) => {
                  return (
                    <Col style={{ marginTop: "20px" }} span={11}>
                      <Card>
                        <Title
                          style={{
                            fontSize: "30px",
                            fontFamily: "Roboto Slab",
                            textAlign: "center",
                            marginBottom: "20px",
                          }}
                        >
                          {project.title}
                        </Title>

                        <Image.PreviewGroup>
                          <Carousel dotPosition="bottom" effect="fade" autoplay>
                            {project.images?.map((image: any) => {
                              return (
                                <>
                                  <Image height="400px" src={image}></Image>
                                  <Card bordered={false}></Card>
                                </>
                              );
                            })}
                          </Carousel>
                        </Image.PreviewGroup>

                        <Row style={{ marginBottom: "20px" }}>
                          {project.techstack?.map((tech: any) => {
                            return (
                              <Tag
                                color={
                                  badgeMapping.find(
                                    (mapping) => mapping.techstack == tech
                                  )?.color
                                }
                              >
                                {tech}
                              </Tag>
                            );
                          })}
                        </Row>

                        <Text>{project.text}</Text>

                        <Row style={{ marginTop: "20px" }}>
                          {project.links?.map((link: any) => {
                            return (
                              <Button
                                shape="round"
                                style={{ marginRight: "10px" }}
                                type="primary"
                                onClick={() => window.open(link.link, "_blank")}
                              >
                                {link.title}
                              </Button>
                            );
                          })}
                        </Row>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </TabPane>
          );
        })}
      </Tabs>
    </>
  );
};

export default Project;
