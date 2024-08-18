import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Sunbelt Rentals",
      description: "This is the hardware products Rental application",
      imgUrl: projImg1,
    },
    {
      title: "Amazon clone",
      description: "This is e-commerece apliciation",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Work Experience & Featured Projects</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first" >
                        <div>
                          <h2>Download My CV</h2>
                          <a href="/B.Abhijith (4).pdf" download="B.Abhijith (4).pdf">
                            <button className="download_btn">Download CV</button>
                          </a>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second" className="tab-panel">
                        <h3>Work Experience (FRONTEND DEVELOPER L2) </h3>
                          <p>
                            Collaborated on E-commerce app using React JS, HTML,
                            SCSS, GraphQL for seamless data interaction.
                          </p>
                         
                          <p>
                            Utilized React hooks, Context API, and Redux for
                            efficient state management and reusable code
                            components.
                          </p>
                         
                          <p>
                            Spearheaded the meticulous practice of unit testing,
                            leveraging Jest React library to ensure code
                            robustness and reliability; <br /> achieved a 50%
                            decrease in post-release defects and boosted
                            developer productivity by 75%.
                          </p>
                         
                          <p>
                            Executed ATDD approach, reducing post-release
                            defects by 50% through React Testing Library and
                            Jest.
                          </p>
                       
                       
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="image-right"></img>
    </section>
  );
};
