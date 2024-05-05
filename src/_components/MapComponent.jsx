"use client";
import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "react-leaflet-markercluster/dist/styles.min.css";

const Icon = new L.Icon({
  iconUrl: "https://cdn-icons-png.freepik.com/256/9972/9972854.png",
  iconRetinaUrl: "https://cdn-icons-png.freepik.com/256/9972/9972854.png",
  iconAnchor: [25, 41],
  popupAnchor: [0, -40],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
  iconSize: [41, 41],
  className: "rounded-[40px] ",
});

export default function MapComponent() {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([
            position.coords.latitude,
            position.coords.longitude,
          ]);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation not available");
    }
  }, []);

  return (
    <div>
      {userLocation ? (
        <MapContainer center={userLocation} zoom={18} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={userLocation} icon={Icon}>
            <Tooltip
              direction="bottom"
              offset={[-8, 0]}
              opacity={1}
              permanent
              interactive
            >
              Your current location. <br /> Easily customizable.
            </Tooltip>
          </Marker>
        </MapContainer>
      ) : (
        <p>Please allow location access to view the map.</p>
      )}
    </div>
  );
}
