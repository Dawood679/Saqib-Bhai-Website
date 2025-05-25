import { useState } from "react";

export default function PickupTime({ defaultDate, defaultTime, defaultLocation }) {
  const [date, setDate] = useState(defaultDate || new Date());
  const [time, setTime] = useState(defaultTime || "12:00 AM");
  const [location, setLocation] = useState(defaultLocation || "");
  const [showMap, setShowMap] = useState(false);

  const times = Array.from({ length: 24 * 4 }, (_, i) => {
    const hour = Math.floor(i / 4);
    const minute = (i % 4) * 15;
    return new Date(0, 0, 0, hour, minute).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  });

  // Open Google Maps Popup
  const openMap = () => {
    setShowMap(true);
  };

  // Close Popup & Set Location
  const handleLocationSelect = (lat, lng) => {
    setLocation(`Lat: ${lat}, Lng: ${lng}`);
    setShowMap(false);
  };

  // Get Current Location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude}, Lng: ${longitude}`);
          setShowMap(false);
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("Location access denied. Please enable location services.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="p-4 w-full max-w-4xl mx-auto shadow-lg rounded-2xl bg-[#2d2e30] text-[#b0afaf] flex flex-col md:flex-row items-center gap-4 md:gap-6">
      
      {/* Date Picker */}
      <div className="w-full md:flex-1">
        <label className="block font-medium mb-1">From Date</label>
        <input
          type="date"
          value={date.toISOString().split("T")[0]}
          onChange={(e) => setDate(new Date(e.target.value))}
          className="w-full border px-3 py-2 rounded-lg"
        />
      </div>

      {/* Time Picker */}
      <div className="w-full md:flex-1">
        <label className="block font-medium mb-1">Pick-Up Time</label>
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg"
        >
          {times.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Drop-off Location */}
      <div className="w-full md:flex-1">
        <label className="block font-medium mb-1">Drop-Off Location</label>
        <input
          type="text"
          value={location}
          onClick={openMap} // Open Google Maps popup
          readOnly
          placeholder="Click to select location"
          className="w-full border px-3 py-2 rounded-lg cursor-pointer"
        />
      </div>

      {/* Search Button */}
      <div className="w-full md:w-auto lg:pt-6">
        <button className="w-full md:w-auto bg-[#2d2e30]  broder-[#414245] border-1 text-zince-600 px-5 py-2 rounded-lg hover:bg-[#030303] transition">
          Search
        </button>
      </div>

      {/* Google Maps Popup */}
      {showMap && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#2d2e30] text-[#b0afaf] p-6 rounded-lg shadow-lg w-full max-w-2xl relative">
            <h2 className="text-lg font-semibold mb-4">Select Your Location</h2>
            
            {/* Google Maps Embed */}
            <iframe
              title="Google Maps"
              className="w-full h-80 rounded-lg"
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Current+Location"
              allowFullScreen
            ></iframe>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button
                className="bg-[#2d2e30] text-[#b0afaf] px-4 py-2 rounded-lg hover:bg-[#030303] transition border-zinc-500 border-1"
                onClick={getCurrentLocation}
              >
                Use Current Location
              </button>
              <div>
                <button
                  className="bg-[#2d2e30] text-[#b0afaf] px-4 py-2 rounded-lg mr-2 hover:bg-[#030303] transition border-zinc-500 border-1"
                  onClick={() => handleLocationSelect(37.7749, -122.4194)} // Dummy Lat/Lng
                >
                  Select Location
                </button>
                <button
                  className="bg-[#2d2e30] text-[#b0afaf] px-4 py-2 rounded-lg hover:bg-[#030303] transition border-zinc-500 border-1"
                  onClick={() => setShowMap(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
