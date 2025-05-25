import { useState } from "react";

export default function BookingForm({ car, option, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  if (!car) return null;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-3">Booking for {car.name} ({option})</h2>

      <label className="block mb-2">Full Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-2 rounded-lg mb-3" />

      <label className="block mb-2">Phone Number</label>
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border p-2 rounded-lg mb-3" />

      <div className="flex gap-2">
        <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">Confirm Booking</button>
        <button onClick={onClose} className="w-full bg-gray-400 text-white py-2 rounded-lg hover:bg-gray-500">Cancel</button>
      </div>
    </div>
  );
}
