import Car from "./Car";
import React from "react";
import CarRentalForm from "./CarRentalfrom";
import { motion } from "framer-motion";





const Vehicles = () => {
  
  return (
    <div className="w-full bg-[#373A40]">
      {/* Header Section */}
      <div className="w-full h-30 bg-black text-white flex justify-end items-center px-5">
        <h2 className="text-xl font-semibold pt-15">Vehicle</h2>
      </div>

      {/* Rental Form */}
      <div className="mt-5 px-5 bg-[#373A40]">
        <CarRentalForm />
      </div>

      {/* Vehicles Listing */}
      <div className="px-5 bg-[#373A40] text-[#D8D9DA] pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {[...Array(8)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Car
                image="https://car-images.bauersecure.com/pagefiles/4111/suzuki_alto.jpg"
                name="Suzuki Alto"
                seats={4}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vehicles;
