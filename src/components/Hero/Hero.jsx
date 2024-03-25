import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h3 variants={textVariants}></motion.h3>
          <motion.h2 variants={textVariants}>Ihza Mahendra</motion.h2>
          <motion.h1 variants={textVariants}>Frontend Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a href="#Portfolio">
              <motion.button class="button-85" role="button" variants={textVariants}>
                See My Works
              </motion.button></a>
            <a href="#Contact">
              <motion.button class="button-85" role="button" variants={textVariants}>Contact</motion.button>
            </a>
          </motion.div>

        </motion.div>
      </div>

      <div className="imageContainer">
        <img src="/ihza-circle.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
