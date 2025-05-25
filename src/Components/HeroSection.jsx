import React from "react";
import { motion } from "framer-motion";
import CarImage from "../assets/Car.jpg";
import { NavLink } from "react-router-dom";
import DateCard from "./DateCard"


const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger effect
      },
    },
  };

  const textSpanVariants = {
    hidden: { opacity: 0, y: -20 }, // Move from top
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 1.5 } },
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Full-Screen Image with Lens Effect */}
      <motion.div className="absolute inset-0 w-full h-full bg-black/30 mix-blend-overlay" />
      <motion.img 
        src={CarImage} 
        alt="Car" 
        className="w-full h-full object-cover"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Lens Effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full bg-white/10 rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-white opacity-50" />

      {/* Content Box with Staggered Animation */}
      <div
        className="absolute p-6 bg-[#373A40] text-white rounded-2xl flex flex-col gap-4 
                      top-[100px] right-[50px] translate-x-0  
                      lg:-translate-x-35 lg:top-[340px] lg:right-[190px] lg:w-[55vw]
                      "
        
      >
      <DateCard/>
        
        
        
        
      </div>
    </div>
  );
};

export default HeroSection;
