import React from "react";

//import pages

import AboutSection from "../components/aboutSection";
import ServiceSection from "../components/ServiceSection";
import FaqSection from "../components/FaqSection";
import NavSection from "../components/nav";

const aboutUs = () => {
  return (
    <>
      <NavSection />
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </>
  );
};

export default aboutUs;
