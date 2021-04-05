import React from "react";
//import components
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import Nav from "../components/Nav";
import ServicesSection from "../components/ServicesSection";

function AboutUs(props) {
  return (
    <>
      <Nav></Nav>
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <FaqSection></FaqSection>
    </>
  );
}

export default AboutUs;
