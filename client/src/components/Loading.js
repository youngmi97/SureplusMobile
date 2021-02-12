import React from "react";
import { motion } from "framer-motion";

// Should match to frame size
const loadingContainer = {
  width: "2rem",
  height: "2rem ",
  top: "50%",
  left: "47%",
  position: "relative",
  display: "flex",

  justifyContent: "space-around",
};

const loadingCircle = {
  display: "block",
  width: "0.25rem",
  height: "0.25rem",
  backgroundColor: "#7610EB",
  borderRadius: "0.175rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

//yoyo loop and flip -> repeat, repeatType
//currently changed yoyo to repeat --> is this correct?
const loadingCircleTransition = {
  duration: 0.4,
  repeat: Infinity,
  ease: "easeInOut",
};

export default function Loading() {
  return (
    <motion.div
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
}
