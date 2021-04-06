import React from "react";
//import components
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";

import ServicesSection from "../components/ServicesSection";

function AboutUs(props) {
  return (
    <>
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <FaqSection></FaqSection>
    </>
  );
}

export default AboutUs;
