import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Helmet } from "react-helmet";

const MapComponent = () => {
  return (
    <>
      <Helmet>
        <title>Contact Me - Speech App</title>
      </Helmet>
      <MapContainer
        center={[10.7178105, 106.72817]}
        zoom={18}
        style={{ height: "420px" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </>
  );
};

export default MapComponent;
