import React from "react";
//import components
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";

import ServicesSection from "../components/ServicesSection";

// animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function AboutUs(props) {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <FaqSection></FaqSection>
    </motion.div>
  );
}

export default AboutUs;
