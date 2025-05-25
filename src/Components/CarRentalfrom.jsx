import { div } from "motion/react-client";
import { useState } from "react";

export default function CarRentalForm() {
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState(new Date().toISOString().split("T")[0]);
  const [pickupTime, setPickupTime] = useState("12:00 PM");
  const [dropoffDate, setDropoffDate] = useState(new Date().toISOString().split("T")[0]);

  // Fetch Current Location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`);
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("Unable to fetch location. Please enable GPS.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="pl-22 bg-[#373A40] text-[#D8D9DA]">
      <div className="p-4 w-full max-w-[120vw] mx-auto  bg-[#373A40]   flex flex-wrap gap-4 items-center">
      {/* Pickup Location */}
      <div className="w-full md:w-1/3">
        <label className="block font-medium mb-1">Where To Pick Up</label>
        <div className="relative">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your City, Airport Or Address *"
            className="w-full border px-3 py-2 rounded-lg"
          />
          <button
            onClick={getCurrentLocation}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500"
          >
            📍
          </button>
        </div>
      </div>

      {/* Pickup Time */}
      <div className="w-full md:w-1/4">
        <label className="block font-medium mb-1">Pick-Up Time</label>
        <input
          type="time"
          value={pickupTime}
          onChange={(e) => setPickupTime(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg"
        />
      </div>

      {/* Drop-off Date */}
      <div className="w-full md:w-1/4">
        <label className="block font-medium mb-1">Drop-off Date</label>
        <input
          type="date"
          value={dropoffDate}
          onChange={(e) => setDropoffDate(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg"
        />
      </div>

      {/* Model */}
      <div className="w-full md:w-1/4">
        <label className="block font-medium mb-1">Model</label>
        <select className="w-full border px-3 py-2 rounded-lg">
          <option>All</option>
          <option>Suzuki Alto</option>
          <option>Honda Civic</option>
          <option>Corolla</option>
        </select>
      </div>

      {/* Vehicle Type */}
      <div className="w-full md:w-1/4">
        <label className="block font-medium mb-1">Vehicle Type</label>
        <select className="w-full border px-3 py-2 rounded-lg">
          <option>All</option>
          <option>SUV</option>
          <option>Sedan</option>
          <option>Hatchback</option>
        </select>
      </div>

      {/* Booking Type */}
      <div className="w-full md:w-1/4">
        <label className="block font-medium mb-1">Booking Type</label>
        <select className="w-full border px-3 py-2 rounded-lg">
          <option>All</option>
          <option>With Driver</option>
          <option>Self Drive</option>
        </select>
      </div>

      {/* Search Button */}
      <div className="w-full md:w-auto pt-6">
        <button className="w-full bg-[#373A40]  text-white px-5 py-2 rounded-lg hover:bg-black border-[#5a5d63] border-1 transition">
          Search
        </button>
      </div>
    </div>
    </div>
  );
}
