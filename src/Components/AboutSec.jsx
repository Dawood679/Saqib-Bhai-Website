import { motion } from "framer-motion";
import React from "react";

const AboutSec = () => {
  return (
    <motion.div
      className="bg-[#2d2e30] border-b-2 border-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="khalicont w-[99vw] h-[18vh] bg-[black] flex justify-end items-center pr-5"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h3 className="text-[#b0afaf] font-bold pt-15">About </h3>
      </motion.div>
      <motion.div
        className="main pt-30 pl-30 w-[50vw] h-[80vh]"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-[#b0afaf] font-bold text-2xl border-b-2 border-white w-25">
          About Us
        </h1>
        <div className="pt-6">
          {[
            "Booking a car has never been easier! With Rently My Car, reserve your vehicle in just a few clicks. Our user-friendly platform ensures a quick and seamless process, saving you time.",
            "We offer budget-friendly rental options with no hidden fees. Enjoy competitive pricing, flexible rental periods, and transparent billing. Whether for a day or a month, we provide the best value.",
            "Drive worry-free with our comprehensive insurance plans and 24/7 roadside assistance. Every car undergoes regular safety checks to ensure you have a secure and reliable driving experience.",
            "Choose from a wide range of vehicles, including economy, luxury, and SUVs. Whether you need a car for business, leisure, or daily commuting, we have the perfect match for you.",
            "Pick up your car from multiple locations or opt for doorstep delivery. Our easy return policy and flexible drop-off points ensure a stress-free car rental experience, anytime, anywhere.",
          ].map((items, index) => (
            <motion.p
              className="w-[70vw] text-[1.1vw] text-[#b0afaf] leading-7"
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
            >
              {index + 1}.{items}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutSec;
