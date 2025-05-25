import React from "react";
import Logo from "../assets/png-01.png";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }} 
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#313234] w-full border-2 border-black"
    >
      <div className="main flex flex-wrap justify-around p-10 md:p-20 text-center md:text-left">
        <div className="imglogo w-[200px] md:w-[300px] pt-6 pl-1 cursor-pointer">
          <motion.img 
            src={Logo} 
            alt="" 
            className="w-full"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {[1, 2, 3].map((_, index) => (
          <motion.div
            key={index}
            className="items list-none pt-6 font-bold cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
          >
            {["Home", "About", "Contact Us"].map((item, i) => (
              <motion.li 
                key={i}
                whileHover={{ color: "red" }}
                transition={{ duration: 0.3 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.div>
        ))}
      </div>

      <hr className="bg-black pb-[0.1vw]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="icons bg-[#313234] p-4"
      >
        <div className="react-icons flex flex-wrap justify-center items-center gap-6 text-2xl">
          {[<FaFacebook />, <FaWhatsapp />, <CiTwitter />, <MdOutlinePhone />].map((item, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.2, color: "red" }}
              transition={{ duration: 0.3 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        <div className="copyright flex justify-center items-center pt-5 text-sm md:text-[1.5vw] text-center">
          <h2>
            Rently My Car Copyright all rights reserved Dev By Dawood Alam
          </h2>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
