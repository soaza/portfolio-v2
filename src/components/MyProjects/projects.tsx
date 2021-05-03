import { Typography, Tabs, Card, Row, Col, Carousel, Tag, Image } from "antd";

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const badgeMapping = [
  { techstack: "React", color: "blue" },
  { techstack: "ExpressJS", color: "purple" },

  { techstack: "NodeJS", color: "orange" },

  { techstack: "React", color: "blue" },

  { techstack: "PostgresSQL", color: "green" },
];

const reactProjects = {
  type: "React",
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
          Smart-brain is a full-stack web application which detects human faces
          with an image link, using API from Clarifai face detection model.
          <br />
          It tracks user submissions made, with user details stored using
          PostgreSQL database.
        </Text>
      ),
    },
    {
      title: "Pawfriends",
      text: <Text>Web site built for NUS Pawfriends</Text>,
    },
  ],
};

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

      <Tabs
        style={{ marginLeft: "20px" }}
        centered
        size="large"
        animated
        defaultActiveKey="1"
      >
        <TabPane tab="All" key="1">
          <Row>
            {reactProjects.data.map((project) => {
              return (
                <Col span={12}>
                  <Card>
                    <Title
                      style={{
                        fontSize: "30px",
                        fontFamily: "Roboto Slab",
                        textAlign: "center",
                        marginBottom: "0px",
                      }}
                    >
                      {project.title}
                    </Title>

                    <Carousel dotPosition="left" effect="fade">
                      {project.images?.map((image) => {
                        return <Image src={image}></Image>;
                      })}
                    </Carousel>

                    <Row>
                      {project.techstack?.map((tech) => {
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
                    {project.text}
                  </Card>
                </Col>
              );
            })}
          </Row>
        </TabPane>
      </Tabs>

      <div style={{ height: "800px" }}></div>
    </>
  );
};

export default Project;
