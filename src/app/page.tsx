import React from "react";
import Banner from "./_components/home/Banner";
import { Services } from "./_components/home/Services";
import PurposeSection from "./_components/home/PurposeSection";

const HomeComponent = () => {
  return (
    <div className="px-10">
      <Banner />
      <PurposeSection />
      <Services />
    </div>
  );
};

export default HomeComponent;
