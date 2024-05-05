"use client";
import "leaflet/dist/leaflet.css"; // Make sure to import Leaflet CSS
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "react-leaflet-markercluster/dist/styles.min.css";

const position = [51.505, -0.09];

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
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={Icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
