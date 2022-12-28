import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import L from "leaflet";
import "./MapRider.css";
import axios from "axios";

const MapRider = () => {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(true);

  //load the map after the data is loaded

  useEffect(() => {
    if (data) {
      setLoader(false);
    }
  }, [data]);

  useEffect(() => {
    axios.get("http://127.0.0.1:3001/api/v1/bikers").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  const zoom = 13;

  const icon = new L.Icon({
    iconUrl:
      "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <>
      {loader && <div className="loader"></div>}
      <div className="container mb-5">
        <div className="row bg-black py-5"></div>
        <div className="row mb-5">
          <MapContainer
            center={[40.01, -105.26]}
            zoom={11}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data &&
              data.map((biker) => (
                <Marker
                  key={biker.id}
                  position={[biker.latitude, biker.longitude]}
                  icon={icon}
                >
                  <Popup>
                    <div className="card text-center h-25">
                      <image
                        className="profile-image"
                        alt=" "
                        src={data.image}
                        style={{ width: "50%" }}
                      />

                      <h3>
                        <small>{data.first_name}</small> &nbsp;
                        <small>{data.last_name}</small>
                      </h3>
                      <p>
                        <small className="text-danger">
                          {data.city_of_origin}
                        </small>
                      </p>
                      <p>
                        <small className="text-info">
                          {data.state_of_origin}
                        </small>
                      </p>
                    </div>
                  </Popup>
                  ;
                </Marker>
              ))}
          </MapContainer>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MapRider;
