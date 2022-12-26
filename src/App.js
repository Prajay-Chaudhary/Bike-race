import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Photos from "./routes/Photos";
import Contest from "./routes/Contest";
import Riders from "./routes/Riders";
import Home from "./routes/Home";
import Location from "./routes/Location";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar"
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Photos" element={<Photos />} />
        <Route path="/Riders" element={<Riders />} />
        <Route path="/Contest" element={<Contest />} />
        <Route path="/Location" element={<Location/>} />
      </Routes>
    </div>
  );
}

export default App;
