import { Routes, Route } from "react-router-dom";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Features from "./Components/Features";
import AboutSec from "./Components/AboutSec";
import Contact from "./Components/Contact";
import Vehicles from "./Components/Vehicles";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import DateCard from "./Components/DateCard"
import Car from "./Components/Car"

function App() {
  return (
    <Routes>
      <Route path="/" element={<div><Navbar/> <HeroSection/> <About/> <Features/> <Footer/></div> } />
      <Route path="/About" element={<div><Navbar/> <AboutSec/> <Footer/></div>} />
      <Route path="/Contact" element={<div><Navbar/> <Contact/> <Footer/></div>} />
      <Route path="/Vehicles" element={<div><Navbar/> <Vehicles/>  <Footer/></div>} />
      <Route path="/login" element={<div><Navbar/> <Login/> <Footer/></div>} />
      <Route path="/signup" element={<div><Navbar/> <Car/> <Footer/></div>} />
      <Route path="*" element={<Footer />} />
    </Routes>
  );
}

export default App;