import React from "react";
import { motion } from "framer-motion";

export default function Wolf() {
  return (
    <motion.h1
      initial={{ opacity: 0, scale: 0, rotate: "720deg" }}
      animate={{ opacity: 1, scale: 1, rotate: "0deg" }}
      transition={{ duration: 5, type: "spring" }}
      style={{ fontSize: "5rem" }}
    >
      🐺
    </motion.h1>
  );
}
