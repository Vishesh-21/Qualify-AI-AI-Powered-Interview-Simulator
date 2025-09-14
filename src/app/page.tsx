import React from "react";
import Banner from "./_components/home/Banner";
import { Services } from "./_components/home/Services";
import PurposeSection from "./_components/home/PurposeSection";
import { MapSection } from "./_components/home/MapSection";
import { MovingCards } from "./_components/home/MovingCards";
import FrequentQuestions from "./_components/home/FrequentQuestions";
import Footer from "./_components/home/Footer";

const HomeComponent = () => {
  return (
    <div className="md:px-10 px-3">
      <Banner />
      <PurposeSection />
      <Services />
      <MapSection />
      <MovingCards />
      <FrequentQuestions />
      <Footer />
    </div>
  );
};

export default HomeComponent;
