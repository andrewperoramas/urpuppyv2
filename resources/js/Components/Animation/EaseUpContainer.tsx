import React from "react";
import { motion } from "framer-motion";

const EaseUpContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: "easeOut",
            staggerChildren: 0.5, // Delay between child animations
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default EaseUpContainer;

