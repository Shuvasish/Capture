import React from "react";
// animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function ContactUs(props) {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <h1>contact</h1>
    </motion.div>
  );
}

export default ContactUs;
