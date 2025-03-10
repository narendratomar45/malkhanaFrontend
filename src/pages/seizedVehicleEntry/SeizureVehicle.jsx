import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSeizure } from "../../utils/seizedSlice/seizureSlice";

const SeizureVehicle = () => {
  const [formData, setFormData] = useState({
    mudNumber: "",
    gdNumber: "",
    underSection: "",
    vehicleType: "",
    regNo: "",
    chasisNumber: "",
    engineNumber: "",
    colour: "",
    gdDate: "",
    actType: "",
    result: "",
    firNumber: "",
    vehicleOwner: "",
    vivechak: "",
    banam: "",
    document: null,
  });
  const dispatch = useDispatch();
  const seizureData = useSelector((store) => store.seizureVehicle);

  useEffect(() => {
    fetchSeizureVehicleData();
  }, []);

  const fetchSeizureVehicleData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/seizureVehicle"
      );
      dispatch(addSeizure(response.data));
    } catch (error) {
      console.log("ERROR", error);
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
      await axios.post("http://localhost:8080/api/seizureVehicle", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      fetchSeizureVehicleData();
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  if (!seizureData)
    return <div className="text-center text-xl">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(formData).map((key) => (
          <div key={key} className="flex flex-col">
            <label htmlFor={key} className="font-semibold capitalize">
              {key}:
            </label>
            {key === "document" ? (
              <input
                type="file"
                name={key}
                onChange={handleChange}
                className="p-2 border rounded-md"
              />
            ) : key === "gdDate" ? (
              <input
                type="date"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="p-2 border rounded-md"
              />
            ) : (
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="p-2 border rounded-md"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              {Object.keys(formData).map((record, index) => (
                <th
                  key={index}
                  className="border px-4 py-2 text-left capitalize"
                >
                  {record}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {seizureData?.seizureVehicle?.length > 0 ? (
              seizureData.seizureVehicle.map((record, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  {Object.keys(formData).map((key) => (
                    <td key={key} className="border px-4 py-2">
                      {key === "document" ? (
                        <a
                          href=""
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
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
              <tr>
                <td
                  colSpan={Object.keys(formData).length}
                  className="text-center py-4"
                >
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeizureVehicle;
