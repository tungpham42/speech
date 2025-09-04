import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Helmet } from "react-helmet";
import { Card, Container } from "react-bootstrap";

const MapComponent = () => {
  return (
    <Container className="min-vh-100 d-flex align-items-center justify-content-center py-5">
      <Helmet>
        <title>Contact Me - Speech App</title>
      </Helmet>
      <Card className="shadow-lg border-0 w-100" style={{ maxWidth: "800px" }}>
        <Card.Body className="p-5">
          <h1 className="display-5 fw-bold mb-4 text-center text-primary">
            Find Us
          </h1>
          <MapContainer
            center={[10.7178105, 106.72817]}
            zoom={18}
            style={{ height: "400px", borderRadius: "10px" }}
            scrollWheelZoom={false}
            className="shadow-sm"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </MapContainer>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MapComponent;
