import React from "react";
import HemoHero from "../components/Home/HomeHero";
import RingGemstone from "../components/Home/RingGemstone";
import DiamondGifts from "../components/Home/DiamondGifts";
import Rticom from "../components/Home/RtiHome";
import GalleryHome from "../components/Home/GalleryHome";


function Home() {
  return (
    <>
      <HemoHero />
      <DiamondGifts/>
      <RingGemstone />
      <Rticom/>
      <GalleryHome/>
    </>
  );
}

export default Home;
