import React, { useState, useEffect, useRef } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faUndo,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import getLanguageName from "./getLanguageName";
import { Helmet } from "react-helmet";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [languages, setLanguages] = useState([]);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioURL, setAudioURL] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const mediaStreamRef = useRef(null);

  useEffect(() => {
    const synth = window.speechSynthesis;

    const loadVoices = () => {
      const voices = synth
        .getVoices()
        .sort((a, b) => a.name.localeCompare(b.name));
      setVoices(voices);

      const uniqueLanguages = [
        ...new Set(voices.map((voice) => voice.lang)),
      ].sort((langCode1, langCode2) => {
        const name1 = getLanguageName({ localeCode: langCode1 });
        const name2 = getLanguageName({ localeCode: langCode2 });
        return name1.localeCompare(name2);
      });
      setLanguages(uniqueLanguages);
    };

    loadVoices();
    synth.onvoiceschanged = loadVoices;

    return () => {
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  const handleSpeak = async () => {
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;

      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setAudioBlob(blob);
        setAudioURL(url);
        audioChunksRef.current = [];
      };

      mediaRecorderRef.current.start();
      window.speechSynthesis.speak(utterance);

      setIsSpeaking(true);

      utterance.onend = () => {
        mediaRecorderRef.current.stop();
        setIsSpeaking(false);
      };
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const handleVoiceChange = (event) => {
    const selectedVoice = voices.find(
      (voice) => voice.name === event.target.value
    );
    setSelectedVoice(selectedVoice);
  };

  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    setSelectedLanguage(lang);
    setSelectedVoice(null);
  };

  const handleReset = () => {
    setText("");
    setSelectedLanguage("");
    setSelectedVoice(null);
    setAudioBlob(null);
    setAudioURL("");
    window.speechSynthesis.cancel();

    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
    }

    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => {
        track.stop();
      });
    }

    setIsSpeaking(false);
  };

  const downloadAudio = () => {
    if (!audioBlob) return;

    const url = URL.createObjectURL(audioBlob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "speech.webm";
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const filteredVoices = voices.filter(
    (voice) => voice.lang === selectedLanguage
  );

  return (
    <Container className="min-vh-100 d-flex align-items-center justify-content-center py-5">
      <Helmet>
        <title>Text to Speech - Speech App</title>
      </Helmet>
      <Card className="shadow-lg border-0 w-100" style={{ maxWidth: "800px" }}>
        <Card.Body className="p-5">
          <h1 className="display-5 fw-bold mb-4 text-center text-primary">
            Text to Speech
          </h1>
          <Form>
            <Form.Group className="mb-4">
              <Form.Label className="fw-semibold">Enter Text</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="shadow-sm"
                style={{ resize: "none" }}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="fw-semibold">Select Language</Form.Label>
              <Form.Select
                value={selectedLanguage}
                onChange={handleLanguageChange}
                className="shadow-sm"
              >
                <option value="">Select a language</option>
                {languages.map((lang, index) => (
                  <option key={index} value={lang}>
                    {getLanguageName({ localeCode: lang })}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            {selectedLanguage && (
              <Form.Group className="mb-4">
                <Form.Label className="fw-semibold">Select Voice</Form.Label>
                <Form.Select
                  value={selectedVoice?.name || ""}
                  onChange={handleVoiceChange}
                  className="shadow-sm"
                >
                  <option value="">Default</option>
                  {filteredVoices.map((voice, index) => (
                    <option key={index} value={voice.name}>
                      {voice.name} ({voice.lang})
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            )}
            <Row className="g-3">
              <Col>
                <Button
                  variant="primary"
                  onClick={handleSpeak}
                  className="w-100 py-3 btn-gradient-primary"
                  style={{
                    background: "linear-gradient(90deg, #007bff, #00d4ff)",
                    border: "none",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                >
                  {isSpeaking ? (
                    <>
                      <FontAwesomeIcon icon={faPause} /> Speaking...
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPlay} /> Speak
                    </>
                  )}
                </Button>
              </Col>
              {audioURL && (
                <Col>
                  <Button
                    variant="success"
                    onClick={downloadAudio}
                    className="w-100 py-3 btn-gradient-success"
                    style={{
                      background: "linear-gradient(90deg, #28a745, #20c997)",
                      border: "none",
                      transition: "transform 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  >
                    <FontAwesomeIcon icon={faDownload} /> Download WEBM
                  </Button>
                </Col>
              )}
              <Col>
                <Button
                  variant="secondary"
                  onClick={handleReset}
                  className="w-100 py-3 btn-gradient-secondary"
                  style={{
                    background: "linear-gradient(90deg, #6c757d, #adb5bd)",
                    border: "none",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                >
                  <FontAwesomeIcon icon={faUndo} /> Reset
                </Button>
              </Col>
            </Row>
            {audioURL && (
              <div className="mt-4">
                <audio controls src={audioURL} className="w-100 shadow-sm" />
              </div>
            )}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TextToSpeech;
