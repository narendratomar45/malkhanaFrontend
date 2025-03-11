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
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });
      await axios.post("http://localhost:5000/api/summon", data);
      alert("Summon entry added!");
      setFormData((prevData) => {
        return Object.keys(prevData).reduce((acc, key) => {
          acc[key] = "";
          return acc;
        }, {});
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
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label htmlFor={key}>{key} </label>
            {key === "entryType" ? (
              <select name={key}>
                <option>Select Entry Type</option>
                {entryTypes.map((entry) => (
                  <option key={entry} value={entry}>
                    {entry}
                  </option>
                ))}
              </select>
            ) : key === "date" ? (
              <input
                type="date"
                name={key}
                value={formData[key]}
                onChange={handleChange}
              />
            ) : key === "time" ? (
              <input
                type="time"
                name={key}
                value={formData[key]}
                onChange={handleChange}
              />
            ) : (
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
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
