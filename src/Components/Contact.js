import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const composeEmail = () => {
    window.location.href = "mailto:aabhijth36@gmail.com";
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <Container className="contact-section p-4">
                    <Row>
                      <Col>
                        <div className="text-box text-center mt-4">
                          <p className="contact-text">
                            If you have any questions or need a front-end
                            developer, please feel free to click the button
                            below to send me an email.
                          </p>
                          <button
                            className="compose-btn"
                            onClick={composeEmail}
                          >
                            Send
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
