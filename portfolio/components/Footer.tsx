"use client";

import { motion } from "framer-motion";
import * as React from "react";


const Footer = () => {

  return (
    <footer className="bg-background text-foreground py-8">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-sm"
        >
          &copy; {new Date().getFullYear()} BNBDEVELOPMENT. Minden jog fenntartva.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer; 