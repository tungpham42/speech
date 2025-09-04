import React, { useState, useCallback } from "react";
import {
  Container,
  Button,
  Form,
  Alert,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faMicrophoneSlash,
  faDownload,
  faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";
import useSpeechRecognition from "./useSpeechRecognition";
import downloadFile from "./downloadFile";
import languages from "./languages";
import { Helmet } from "react-helmet";

const SpeechToText = () => {
  const [transcript, setTranscript] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState("");

  const { recognition, changeLanguage, language } = useSpeechRecognition(
    setError,
    setTranscript
  );

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value);
    reset();
  };

  const startRecording = useCallback(() => {
    if (recognition) {
      setIsRecording(true);
      setTranscript("");
      recognition.start();
    }
  }, [recognition]);

  const stopRecording = useCallback(() => {
    if (recognition) {
      setIsRecording(false);
      recognition.stop();
    }
  }, [recognition]);

  const downloadTxt = useCallback(() => {
    downloadFile(transcript, "transcript.txt", "text/txt");
  }, [transcript]);

  const reset = () => {
    setIsRecording(false);
    recognition.stop();
    setTranscript("");
  };

  return (
    <Container className="min-vh-100 d-flex align-items-center justify-content-center py-5">
      <Helmet>
        <title>Speech to Text - Speech App</title>
      </Helmet>
      <Card className="shadow-lg border-0 w-100" style={{ maxWidth: "800px" }}>
        <Card.Body className="p-5">
          <h1 className="display-5 fw-bold mb-4 text-center text-primary">
            Speech to Text
          </h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group controlId="languageSelection" className="mb-4">
              <Form.Label className="fw-semibold">Select Language</Form.Label>
              <Form.Select
                value={language}
                onChange={handleLanguageChange}
                className="shadow-sm"
              >
                {languages.map((language) => (
                  <option key={language.code} value={language.code}>
                    {language.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group controlId="transcriptTextarea" className="mb-4">
              <Form.Label className="fw-semibold">Transcript</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={transcript}
                readOnly
                className="shadow-sm"
                style={{ resize: "none", fontFamily: "monospace" }}
              />
            </Form.Group>
            <Row className="g-3">
              <Col>
                <Button
                  variant={isRecording ? "danger" : "primary"}
                  className="w-100 py-3 btn-gradient-primary"
                  style={{
                    background: isRecording
                      ? "linear-gradient(90deg, #dc3545, #ff6b6b)"
                      : "linear-gradient(90deg, #007bff, #00d4ff)",
                    border: "none",
                    transition: "transform 0.2s",
                  }}
                  onClick={isRecording ? stopRecording : startRecording}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                >
                  {isRecording ? (
                    <>
                      <FontAwesomeIcon icon={faMicrophoneSlash} /> Stop
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faMicrophone} /> Start
                    </>
                  )}
                </Button>
              </Col>
              <Col>
                <Button
                  variant="success"
                  onClick={downloadTxt}
                  className="w-100 py-3 btn-gradient-success"
                  style={{
                    background: "linear-gradient(90deg, #28a745, #20c997)",
                    border: "none",
                    transition: "transform 0.2s",
                  }}
                  disabled={!transcript}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                >
                  <FontAwesomeIcon icon={faDownload} /> Download TXT
                </Button>
              </Col>
              <Col>
                <Button
                  variant="secondary"
                  onClick={reset}
                  className="w-100 py-3 btn-gradient-secondary"
                  style={{
                    background: "linear-gradient(90deg, #6c757d, #adb5bd)",
                    border: "none",
                    transition: "transform 0.2s",
                  }}
                  disabled={!transcript}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                >
                  <FontAwesomeIcon icon={faRedoAlt} /> Reset
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SpeechToText;
