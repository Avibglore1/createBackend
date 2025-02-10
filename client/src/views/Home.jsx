import React from "react";
import HemoHero from "../components/Home/HomeHero";
import RingGemstone from "../components/Home/RingGemstone";
import DiamondGifts from "../components/Home/DiamondGifts";
import Rticom from "../components/Home/RtiHome";
import GalleryHome from "../components/Home/GalleryHome";
import RingSlider from "../components/RingSlider/RingSlider";
import Finddiamond from "../components/Home/Finddiamond";

function Home() {
  return (
    <>
      <HemoHero />
      <DiamondGifts/>
      <RingGemstone />
      <RingSlider/>
      <Rticom/>
      <Finddiamond/>
      <GalleryHome/>
    </>
  );
}

export default Home;
