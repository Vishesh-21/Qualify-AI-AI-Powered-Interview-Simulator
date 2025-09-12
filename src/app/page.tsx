import React from "react";
import Banner from "./_components/home/Banner";
import { Services } from "./_components/home/Services";
import PurposeSection from "./_components/home/PurposeSection";
import { MapSection } from "./_components/home/MapSection";
import { MovingCards } from "./_components/home/MovingCards";

const HomeComponent = () => {
  return (
    <div className="px-10">
      <Banner />
      <PurposeSection />
      <Services />
      <MapSection />
      <MovingCards />
    </div>
  );
};

export default HomeComponent;
