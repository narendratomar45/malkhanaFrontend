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
    <div className="p-5 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Arto Seizure Form</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label className="block font-medium">{key}:</label>
            {key === "document" ? (
              <input
                type="file"
                name={key}
                onChange={handleChange}
                className="border p-2 w-full"
              />
            ) : key === "gdDate" ? (
              <input
                type="date"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="border p-2 w-full"
              />
            ) : (
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="border p-2 w-full"
              />
            )}
          </div>
        ))}
        <button type="submit" className="col-span-2 bg-blue-500 text-white p-2">
          Submit
        </button>
      </form>

      <h2 className="text-2xl font-bold my-4">Records</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            {Object.keys(formData).map((key) => (
              <th key={key} className="border p-2">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {artoData?.artoSeizure?.length > 0 ? (
            artoData.artoSeizure.map((record, index) => (
              <tr key={index} className="border">
                {Object.keys(formData).map((key) => (
                  <td key={key} className="border p-2">
                    {key === "document" ? (
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
  );
};

export default ArtoSeizure;
