import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapSection = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

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
      ></GoogleMap>
    </LoadScript>
  );
};

export default MapSection;
