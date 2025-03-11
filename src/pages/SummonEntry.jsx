// import React from "react";

// const SummonEntry = () => {
//   return <div>Summon Entry</div>;
// };

// export default SummonEntry;

import React, { useState } from "react";
import axios from "axios";

const SummonEntry = ({ refreshEntries }) => {
  const [formData, setFormData] = useState({
    entryType: "",
    firOrGdNumber: "",
    policeStation: "",
    vehicleOwner: "",
    fatherName: "",
    address: "",
    vehicleregNo: "",
    place: "",
    lastDays: "",
    releaseDays: "",
    actType: "",
    date: "",
    time: "",
  });

  const entryTypes = [
    "MV Act Seizure",
    "ARTO Seizure",
    "IPC Vehicle",
    "Excise Vehicle",
    "Unclaimed Vehicle",
    "Seizure Vehicle",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/summon", formData);
      alert("Summon entry added!");
      setFormData({
        entryType: "",
        firOrGdNumber: "",
        policeStation: "",
        vehicleOwner: "",
        fatherName: "",
        address: "",
        vehicleregNo: "",
        place: "",
        lastDays: "",
        releaseDays: "",
        actType: "",
        date: "",
        time: "",
      });
      refreshEntries(); // Refresh table
    } catch (error) {
      console.error("Error adding summon entry:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add Summon Entry</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Entry Type</label>
          <select
            name="entryType"
            value={formData.entryType}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Type</option>
            {entryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">FIR/GD Number</label>
          <input
            type="text"
            name="firOrGdNumber"
            value={formData.firOrGdNumber}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Police Station</label>
          <input
            type="text"
            name="policeStation"
            value={formData.policeStation}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Vehicle Owner</label>
          <input
            type="text"
            name="vehicleOwner"
            value={formData.vehicleOwner}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Vehicle Reg No</label>
          <input
            type="text"
            name="vehicleregNo"
            value={formData.vehicleregNo}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SummonEntry;
