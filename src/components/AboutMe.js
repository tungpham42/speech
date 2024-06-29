import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";

const AboutMe = () => {
  return (
    <Container className="my-5">
      <Helmet>
        <title>About Me - Speech App</title>
      </Helmet>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">About Me</Card.Title>
              <Card.Text>
                <p>
                  Hi there! I'm <strong>Tung Pham</strong>, a passionate{" "}
                  <em>Webmaster</em>. I love building applications and exploring
                  new technologies. Currently, I'm focused on{" "}
                  <strong>PHP and ReactJS projects</strong>. In my free time, I
                  enjoy <em>Board Games</em>.
                </p>
                <p>
                  Feel free to connect with me on{" "}
                  <a
                    href="https://www.facebook.com/tungpham42/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                  , or check out my projects on{" "}
                  <a
                    href="https://github.com/tungpham42/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub/Portfolio
                  </a>
                  .
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
