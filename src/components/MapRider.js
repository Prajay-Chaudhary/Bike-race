  import React, { useState } from 'react'
  import { Data } from "../assets/Data";
  import Footer from "../components/Footer";
  import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
  import "leaflet/dist/leaflet.css";
  import "leaflet-defaulticon-compatibility";
  import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
  import L from "leaflet";
  import "./MapRider.css";

const MapRider = () => {
  const [todos] = useState(Data);

  const zoom = 13;

const myIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  const first = [todos[0].position[0].lat, todos[0].position[0].lng];
  return (
    <div className="container mb-5">
      <div className="row bg-black py-5"></div>
      <div className="row mb-5">
        <MapContainer center={first} zoom={zoom} className="map">
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {todos.map((item, i) => {
            let pointer = [item.position[0].lat, item.position[0].lng];

            return (
              <Marker position={pointer} icon={myIcon} key={i}>
                <Popup>
                  <div className="card text-center h-25">
                    <image
                      className="profile-image"
                      alt=" "
                      src={item.imgUrl}
                      style={{ width: "50%" }}
                    />

                    <h3>
                      <small>{item.first}</small> &nbsp;
                      <small>{item.last}</small>
                    </h3>
                    <p>
                      <small className="text-danger">{item.city}</small>
                    </p>
                    <p>
                      <small className="text-info">{item.state}</small>
                    </p>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
      <Footer />
    </div>
  );
}

export default MapRider