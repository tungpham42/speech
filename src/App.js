import React from "react";
import { HashRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import LandingPage from "./components/LandingPage";
import TextToSpeech from "./components/TextToSpeech";
import SpeechToText from "./components/SpeechToText";
import AboutMe from "./components/AboutMe";
import MapComponent from "./components/MapComponent";

const App = () => (
  <Router>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Speech App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink
              to="/text-to-speech"
              className="nav-link"
              activeClassName="active"
            >
              Text to Speech
            </NavLink>
            <NavLink
              to="/speech-to-text"
              className="nav-link"
              activeClassName="active"
            >
              Speech to Text
            </NavLink>
            <NavLink
              to="/about-me"
              className="nav-link"
              activeClassName="active"
            >
              About Me
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container className="mt-3">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/text-to-speech" element={<TextToSpeech />} />
        <Route path="/speech-to-text" element={<SpeechToText />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<MapComponent />} />
      </Routes>
    </Container>
  </Router>
);

export default App;
