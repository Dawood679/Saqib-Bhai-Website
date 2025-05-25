import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";

const About = () => {
  return (
    <div className="w-full h-full bg-[#373A40] p-5">
      <motion.h1 
        className="text-center text-4xl font-semibold pt-10 pb-5 text-black"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        About Us
      </motion.h1>
      <div className="main grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5 pb-10">
        {[about1, about2, about3].map((image, index) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
          return (
            <motion.div 
              ref={ref}
              key={index} 
              className="items shadow-md hover:scale-105 transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
            >
              <div className="Card1 bg-white rounded-lg overflow-hidden">
                <div className="img w-full h-48">
                  <img className="w-full h-full object-cover" src={image} alt="Car Rental" />
                </div>
                <div className="textitem flex flex-col p-5 gap-3">
                  <h2 className="text-2xl font-bold">
                    {index === 0 ? "Affordable Car Rentals" : index === 1 ? "Luxury & Premium Cars" : "Long-Term Rentals & Discounts"}
                  </h2>
                  <p className="text-gray-700">
                    {index === 0
                      ? "Find budget-friendly rental cars for your next trip. No hidden fees, just smooth rides!"
                      : index === 1
                      ? "Experience luxury on the road with our premium car rentals. Perfect for special occasions!"
                      : "Need a car for a month or more? Get exclusive discounts on long-term rentals."}
                  </p>
                  <button className="text-center py-2 rounded border-2 border-black w-40 hover:bg-black hover:text-white transition">
                    Read More
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
