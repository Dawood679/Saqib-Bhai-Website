import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import myImage from "../assets/png-01.png";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -90 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: -90 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <nav className="bg-[#373A40] shadow-md w-[100vw] fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={logoVariants} 
            className="flex-shrink-0 cursor-pointer"
          >
            <NavLink to="/">
              <img src={myImage} alt="Logo" className="h-12" />
            </NavLink>
          </motion.div>

          {/* Menu Button (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </button>
          </div>

          {/* Navigation Links */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={containerVariants}
            className="hidden md:flex space-x-5 text-[#cd081f] font-bold text-lg lg:translate-x-30"
          >
            {["/", "/About", "/Contact","/Vehicles","/Login","/|","/Signup"].map((path,index) => (
              <motion.div key={path} variants={linkVariants}>
                <NavLink to={path} className={`hover:text-[#737679] transition duration-300  ${index===4 && "lg:pl-30 lg:"}`}>
                  {path === "/" ? "Home" : path.substring(1)}
                  
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-[#2C2E33] p-4 space-y-4 text-center"
          >
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={containerVariants}
            >
              {["/", "/About", "/Contact","/Vehicles","/Login","/Signup"].map((path) => (
                <motion.div key={path} variants={linkVariants}>
                  <NavLink
                    to={path}
                    className="block text-[#D8D9DA] hover:text-[#737679] transition duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {path === "/" ? "Home" : path.substring(1)}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
