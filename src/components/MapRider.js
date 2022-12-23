  import React from 'react'
  import Footer from "../components/Footer";
  import { useMap } from "https://cdn.esm.sh/react-leaflet";
  import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
  import "leaflet/dist/leaflet.css";
  import "leaflet-defaulticon-compatibility";
  import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const MapRider = () => {
  return (
    <div className="container mb-5">
      <div className="row bg-black py-5"></div>
      <div className="row">
        <MapContainer
          style={{ width: "100%", height: "80vh" }}
          zoom={13}
          center={[51.505, -0.09]}
          scrollWheelZoom={false}
          fadeAnimation={true}
          markerZoomAnimation={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default MapRider