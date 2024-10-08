import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h1 className="logo">B Abhijith</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
           
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abhijith-abhi-5a7a171b8" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
               {/* eslint-disable-next-line jsx-a11y/anchor-is-valid  */}
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
               {/* eslint-disable-next-line jsx-a11y/anchor-is-valid  */}
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}