import React from "react";

//import pages

import AboutSection from "../components/aboutSection";
import ServiceSection from "../components/ServiceSection";
import FaqSection from "../components/FaqSection";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const aboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </motion.div>
  );
};

export default aboutUs;
