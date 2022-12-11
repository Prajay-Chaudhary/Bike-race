import React from 'react'
import NavBar from "../components/NavBar";
import HeroImage from "../components/HeroImage";
import RaceCountDown from "../components/RaceCountDown";
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <NavBar />
      <HeroImage />
      <RaceCountDown />
      <Footer />
    </div>
  );
}

export default Home

