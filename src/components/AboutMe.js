import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {
  return (
    <Container className="min-vh-100 d-flex align-items-center justify-content-center py-5">
      <Helmet>
        <title>About Me - Speech App</title>
      </Helmet>
      <Card className="shadow-lg border-0 w-100" style={{ maxWidth: "600px" }}>
        <Card.Body className="p-5 text-center">
          <h1 className="display-5 fw-bold mb-4 text-primary">About Me</h1>
          <Card.Text className="text-muted mb-4">
            <p>
              Hi, I'm <strong>Tung Pham</strong>, a passionate{" "}
              <em>Webmaster</em>. I love crafting innovative web applications
              and diving into new technologies, with a focus on{" "}
              <strong>PHP and ReactJS</strong>. When I'm not coding, you can
              find me enjoying <em>Board Games</em>.
            </p>
            <p>Let's connect and explore the world of tech together!</p>
          </Card.Text>
          <Row className="g-3">
            <Col>
              <Button
                href="https://www.facebook.com/tungpham42/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-100 py-3 btn-gradient-primary"
                style={{
                  background: "linear-gradient(90deg, #4267B2, #00d4ff)",
                  border: "none",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </Button>
            </Col>
            <Col>
              <Button
                href="https://github.com/tungpham42/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-100 py-3 btn-gradient-secondary"
                style={{
                  background: "linear-gradient(90deg, #333, #6c757d)",
                  border: "none",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutMe;
