import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Photo from "./routes/Photo";
import Contest from "./routes/Contest";
import Rider from "./routes/Rider";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar"
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Photo" element={<Photo />} />
        <Route path="/Rider" element={<Rider />} />
        <Route path="/Contest" element={<Contest />} />
      </Routes>
    </div>
  );
}

export default App;
