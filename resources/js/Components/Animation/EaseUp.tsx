import React from "react";
import { motion } from "framer-motion";

const EaseUp = ({ children }: { children: React.ReactNode }) => {

  return <div>{children}</div>;
  const isJavaScriptEnabled = typeof window !== "undefined";

  if (!isJavaScriptEnabled) {
  }

  return (
    <motion.div
      className="ease-up"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default EaseUp;

