import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { GrMap } from "react-icons/gr";
import contactimg from "../assets/Contact.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center bg-[#373A40]"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img src={contactimg} alt="Contact" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="px-6 py-10 text-center md:text-center md:pl-40"
      >
        <h1 className="text-black font-bold pl-20 text-4xl lg:pr-28 md:text-5xl sm:pl-10">
          Contact Us
        </h1>
        <div className="pt-3 text-center">
          {["Contact us for more Details.",
            "We're always standing by and eager to help.",
            "Live and ticket support services 24/7 for your ease."]
            .map((item, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="text-black text-base md:text-lg lg:pl-10 font-light pr-30 sm:pl-40"
            >
              {item}
            </motion.p>
          ))}
        </div>
      </motion.div>

      <div className="w-full flex flex-col md:flex-row gap-6 items-center justify-center p-6 bg-[#373A40] border-b-2 border-black">
        {[{ icon: <MdOutlineEmail />, title: "Email Address", text: "dawoodalam057@gmail.com" },
          { icon: <FaPhone />, title: "Phone Number", text: "03298231948" },
          { icon: <GrMap />, title: "Address", text: "Karachi, Pakistan" }]
          .map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="w-full md:w-[25vw] h-[35vh] bg-white flex flex-col justify-center items-center rounded-2xl p-6 shadow-lg"
          >
            <motion.div 
              className="icon text-6xl" 
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {item.icon}
            </motion.div>
            <h2 className="text-2xl font-bold pt-5">{item.title}</h2>
            <p className="pt-4 text-center">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Contact;
