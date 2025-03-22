import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addSummonEntry } from "../utils/summonEntrySlice";

const SummonEntry = () => {
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
    date: new Date().toISOString().split("T")[0],
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
  const dispatch = useDispatch();
  const summonEntryData = useSelector((store) => store.summonEntry);
  console.log("SE", summonEntryData);

  const fetchSummonEntry = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/summonEntry");
      dispatch(addSummonEntry(response.data));
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      for (const key in formData) {
        if (!formData[key]) {
          alert(`Please fill out the ${key} field.`);
          return;
        }
      }

      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      await axios.post("http://localhost:8080/api/summonEntry", formData, {
        headers: { "Content-Type": "application/json" },
      });
      setFormData((prevData) => {
        return Object.keys(prevData).reduce((acc, key) => {
          acc[key] = "";
          return acc;
        }, {});
      });
      fetchSummonEntry();
      // refreshEntries(); // Refresh table
    } catch (error) {
      console.error("Error adding summon entry:", error);
    }
  };
  useEffect(() => {
    fetchSummonEntry();
  }, []);
  if (!summonEntryData) return <div> Loading...</div>;
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg w-full mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Add Summon Entry
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-6">
        {Object.keys(formData).map((key) => (
          <div key={key} className="flex flex-col">
            <label
              htmlFor={key}
              className="text-gray-700 font-medium mb-1 capitalize"
            >
              {key}:
            </label>

            {key === "entryType" ? (
              <select
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-50 w-[200px]"
              >
                <option value="">Select Entry Type</option>
                {entryTypes.map((entry) => (
                  <option key={entry} value={entry}>
                    {entry}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={
                  key === "date" ? "date" : key === "time" ? "time" : "text"
                }
                name={key}
                value={formData[key]}
                onChange={handleChange}
                placeholder={key}
                className="border rounded-lg p-2 outline-none bg-gray-50 w-[200px]"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className=" bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300  w-48"
        >
          Submit
        </button>
      </form>
      <div className="mt-8 overflow-x-auto">
        <table className="border ">
          <thead>
            <tr>
              {Object.keys(formData).map((entry, index) => (
                <th key={index} className="border">
                  {entry}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {summonEntryData?.allSummonEntry?.length > 0 ? (
              summonEntryData.allSummonEntry.map((record, index) => (
                <tr key={index}>
                  {Object.keys(formData).map((key, i) => (
                    <td key={i} className="border">
                      {record[key] || "N/A"}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={Object.keys(formData).length}
                  className="border text-center"
                >
                  No Record Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SummonEntry;
