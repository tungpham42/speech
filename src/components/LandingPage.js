import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";

const LandingPage = () => (
  <Container className="text-center mt-5">
    <Helmet>
      <title>Home - Speech App</title>
    </Helmet>
    <h1>Welcome to the Speech App</h1>
    <p>Convert text to speech or speech to text effortlessly.</p>
    <Button variant="primary" as={Link} to="/text-to-speech" className="m-2">
      Text to Speech
    </Button>
    <Button variant="secondary" as={Link} to="/speech-to-text" className="m-2">
      Speech to Text
    </Button>
  </Container>
);

export default LandingPage;
