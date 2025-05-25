import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NewPic from "../assets/features.jpg";

const Features = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="bg-[#373A40] pb-20 px-5 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="main flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 rounded bg-white p-5 lg:p-10 w-full max-w-7xl shadow-lg"
      >
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="img flex justify-center lg:w-1/2"
        >
          <img 
            className="h-60 sm:h-72 md:h-80 lg:h-[75vh] w-full object-cover rounded-lg" 
            src={NewPic} 
            alt="Rently My Car" 
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="items flex flex-col justify-center w-full lg:w-1/2"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-center lg:text-left mb-5 lg:mt-0">
            Rently My Car
          </h1>
          <p className="text-gray-700 text-sm lg:text-base">
            "Rently My Car" is a hassle-free car rental service designed for convenience and affordability.
            Whether you need a vehicle for a day, a week, or longer, we provide flexible rental options
            tailored to your needs. Our booking process is simple—just a few clicks, and you’re ready to hit the road!
          </p>
          <div className="btn mt-5">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              className="text-center py-2 px-4 rounded border-2 border-black w-40 hover:bg-black hover:text-white transition"
            >
              Read More
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Features;
