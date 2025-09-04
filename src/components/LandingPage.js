import React from "react";
import { Link } from "react-router-dom";
import { Container, Button, Card, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";

const LandingPage = () => (
  <Container className="min-vh-100 d-flex align-items-center justify-content-center">
    <Helmet>
      <title>Home - Speech App</title>
    </Helmet>
    <Card
      className="shadow-lg border-0 p-5 w-100"
      style={{ maxWidth: "600px" }}
    >
      <Card.Body className="text-center">
        <h1 className="display-4 fw-bold mb-4 text-primary">Speech App</h1>
        <p className="lead mb-5 text-muted">
          Transform text to speech or speech to text with ease and style.
        </p>
        <Row className="g-3">
          <Col>
            <Button
              as={Link}
              to="/text-to-speech"
              className="w-100 py-3 fs-5 btn-gradient-primary"
              style={{
                background: "linear-gradient(90deg, #007bff, #00d4ff)",
                border: "none",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              Text to Speech
            </Button>
          </Col>
          <Col>
            <Button
              as={Link}
              to="/speech-to-text"
              className="w-100 py-3 fs-5 btn-gradient-secondary"
              style={{
                background: "linear-gradient(90deg, #6c757d, #adb5bd)",
                border: "none",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              Speech to Text
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  </Container>
);

export default LandingPage;
