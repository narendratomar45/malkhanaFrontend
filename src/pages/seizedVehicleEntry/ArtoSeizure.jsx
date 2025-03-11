import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArto } from "../../utils/seizedSlice/artoSlice";

const ArtoSeizure = () => {
  const [formData, setFormData] = useState({
    mudNumber: "",
    gdNumber: "",
    gdDate: "",
    underSection: "",
    vehicleType: "",
    regNo: "",
    chasisNumber: "",
    actType: "",
    colour: "",
    engineNumber: "",
    result: "",
    document: null, // Updated for file upload
  });
  const dispatch = useDispatch();
  const artoData = useSelector((store) => store.arto);
  console.log("ARTO", artoData);

  useEffect(() => {
    fetchRecords();
  }, []);
  const fetchRecords = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/arto");
      console.log("RESPONSE", response);
      dispatch(addArto(response.data));
    } catch (error) {
      console.error("Error fetching records", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });
      console.log("FD", formData);

      const response = await axios.post(
        "http://localhost:8080/api/arto",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(response);

      fetchRecords();
    } catch (error) {
      console.error("Error adding record", error);
    }
  };
  if (!artoData) return <p>Loading...</p>;
  return (
    <div className="w-[90%] mx-auto my-10 overflow-hidden">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Arto Seizure Form
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap  gap-4 justify-self-auto mx-auto"
      >
        {Object.keys(formData).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="block text-gray-700 font-medium mb-1 text-start">
              {key}:
            </label>
            {key === "document" ? (
              <input
                type="file"
                name={key}
                onChange={handleChange}
                className="w-[200px] px-2 py-1 border border-gray-700 rounded outline-none hover:bg-gray-100"
              />
            ) : key === "gdDate" ? (
              <input
                type="date"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-[200px] px-2 py-1 border border-gray-700 rounded outline-none hover:bg-gray-100"
              />
            ) : (
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-[200px] px-2 py-1 border border-gray-700 rounded outline-none hover:bg-gray-100"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="bg-[#7b5926] text-white px-4 py-2 rounded-md w-48"
        >
          Submit
        </button>
      </form>

      <h2 className="text-2xl font-bold my-4">Records</h2>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full border border-gray-300 shadow-lg rounded-lg bg-white">
          <thead className="bg-blue-500 text-white">
            <tr>
              {Object.keys(formData).map((key) => (
                <th key={key} className="border p-2 text-left capitalize">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {artoData?.artoSeizure?.length > 0 ? (
              artoData.artoSeizure.map((record, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  {Object.keys(formData).map((key) => (
                    <td key={key} className="border p-2">
                      {key === "gdDate" ? (
                        new Date(record[key]).toLocaleDateString("en-GB")
                      ) : key === "document" ? (
                        <a
                          href={`http://localhost:8080/uploads/${record[key]}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Document
                        </a>
                      ) : (
                        record[key]
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <td colSpan={10} className="text-center">
                No Record found
              </td>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ArtoSeizure;
