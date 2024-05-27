import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapSection = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const markerPositions = [
    { lat: -32.1877, lng: 74.1945 },
    { lat: -34.0, lng: 150.0 }, // Add more marker positions as needed
  ];

  const center = {
    lat: 32.1877,
    lng: 74.1945,
  };

  const zoomLevel = 12; // Set an appropriate zoom level

  return (
    <LoadScript googleMapsApiKey="AIzaSyBusJOzcf32l3Ij9HMXkGLnUCmjThjzWeg">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoomLevel}
      >
        {markerPositions.map((position, index) => (
          <Marker key={index} position={position} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapSection;
