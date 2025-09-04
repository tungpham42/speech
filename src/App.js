import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import LandingPage from "./components/LandingPage";
import TextToSpeech from "./components/TextToSpeech";
import SpeechToText from "./components/SpeechToText";
import AboutMe from "./components/AboutMe";
import MapComponent from "./components/MapComponent";

const App = () => (
  <Router>
    <Navbar
      expand="lg"
      className="shadow-sm"
      style={{
        background: "linear-gradient(90deg, #007bff, #00d4ff)",
        borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          className="fw-bold fs-4 text-white"
          style={{ transition: "transform 0.2s" }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          Speech App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0">
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1)" }}
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <NavLink
              to="/"
              className="nav-link mx-2 text-white"
              activeClassName="active"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "#fff" : "rgba(255, 255, 255, 0.8)",
                padding: "10px 15px",
                borderRadius: "8px",
                transition: "background 0.2s, transform 0.2s",
              })}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.2)";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.transform = "scale(1)";
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/text-to-speech"
              className="nav-link mx-2 text-white"
              activeClassName="active"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "#fff" : "rgba(255, 255, 255, 0.8)",
                padding: "10px 15px",
                borderRadius: "8px",
                transition: "background 0.2s, transform 0.2s",
              })}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.2)";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.transform = "scale(1)";
              }}
            >
              Text to Speech
            </NavLink>
            <NavLink
              to="/speech-to-text"
              className="nav-link mx-2 text-white"
              activeClassName="active"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "#fff" : "rgba(255, 255, 255, 0.8)",
                padding: "10px 15px",
                borderRadius: "8px",
                transition: "background 0.2s, transform 0.2s",
              })}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.2)";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.transform = "scale(1)";
              }}
            >
              Speech to Text
            </NavLink>
            <NavLink
              to="/about-me"
              className="nav-link mx-2 text-white"
              activeClassName="active"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "#fff" : "rgba(255, 255, 255, 0.8)",
                padding: "10px 15px",
                borderRadius: "8px",
                transition: "background 0.2s, transform 0.2s",
              })}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.2)";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.transform = "scale(1)";
              }}
            >
              About Me
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link mx-2 text-white"
              activeClassName="active"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "#fff" : "rgba(255, 255, 255, 0.8)",
                padding: "10px 15px",
                borderRadius: "8px",
                transition: "background 0.2s, transform 0.2s",
              })}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.2)";
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.transform = "scale(1)";
              }}
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container fluid className="p-0">
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
