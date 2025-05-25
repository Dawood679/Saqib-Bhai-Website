import { useState } from "react";

export default function CarCard({ image, name, seats, transmission, priceBeforeDiscount, priceAfterDiscount, onBook }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleBooking = (option) => {
    setSelectedOption(option);
    onBook(option); // Booking form show karega
  };

  return (
    <div className="w-full max-w-md p-4 bg-[#373A40] text-[#D8D9DA] rounded-lg shadow-amber-50 border-[#D8D9DA] border-1">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg" />

      <h3 className="text-lg font-bold mt-3">{name}</h3>
      <p className="text-sm text-gray-500">{seats} Seats • {transmission}</p>

      <p className=" mt-2 text-sm text-gray-500">
        Overtime: PKR 250/hr <br />
        Refill fuel at end of day or pay PKR 32/KM <br />
        Excluding fuel & overtime charges
      </p>

      <div className="flex mt-3 gap-2">
        <button className={`px-3 py-1 rounded-lg border-[#5a5d63] border-1 ${selectedOption === "With Driver" ? "bg-black text-white" : "bg-[#373A40] "}`} onClick={() => handleBooking("With Driver")}>
          With Driver
        </button>
        <button className={`px-3 py-1 rounded-lg border-[#5a5d63] border-1 ${selectedOption === "Self Drive" ? "bg-black text-white" : "bg-[#373A40] "}`} onClick={() => handleBooking("Self Drive")}>
          Self Drive
        </button>
      </div>

      <div className="flex justify-between items-center mt-3">
        <span className="line-through text-gray-500">{priceBeforeDiscount} PKR/day</span>
        <span className="text-lg font-bold text-[#D8D9DA]">{priceAfterDiscount} PKR/day</span>
      </div>
    </div>
  );
}
