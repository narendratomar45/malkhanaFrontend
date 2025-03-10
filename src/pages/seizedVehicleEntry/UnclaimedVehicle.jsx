import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUnclaimVehicle } from "../../utils/seizedSlice/unclaimedVehicleSlice";

const UnclaimedVehicle = () => {
  const [formData, setFormData] = useState({
    firNumber: "",
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
    vehicleOwner: "",
    vivechak: "",
    document: null,
  });

  const dispatch = useDispatch();
  const unclaimedVehicleData = useSelector((store) => store.unclaimedVehicle);

  const fetchUnclaimedVehicleData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/unclaimedVehicle"
      );
      dispatch(addUnclaimVehicle(response.data));
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

      await axios.post("http://localhost:8080/api/unclaimedVehicle", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      fetchUnclaimedVehicleData();
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    fetchUnclaimedVehicleData();
  }, []);

  if (!unclaimedVehicleData)
    return <div className="text-center mt-10 text-gray-500">Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg"
      >
        {Object.keys(formData).map((key) => (
          <div key={key} className="mb-4">
            <label
              className="block font-semibold text-gray-700 mb-1 capitalize"
              htmlFor={key}
            >
              {key.replace(/([A-Z])/g, " $1")}
            </label>
            {key === "document" ? (
              <input
                type="file"
                name={key}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded p-2"
              />
            ) : key === "gdDate" ? (
              <input
                type="date"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded p-2"
              />
            ) : (
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded p-2"
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {/* Table Section */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 shadow-md bg-white">
          <thead>
            <tr className="bg-blue-600 text-white">
              {Object.keys(formData).map((key) => (
                <th key={key} className="p-3 border capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {unclaimedVehicleData?.unclaimedVehicle?.length > 0 ? (
              unclaimedVehicleData.unclaimedVehicle.map((record, index) => (
                <tr
                  key={index}
                  className="odd:bg-gray-100 hover:bg-gray-200 transition"
                >
                  {Object.keys(formData).map((key) => (
                    <td key={key} className="p-3 border text-center">
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
                  className="p-3 text-center text-gray-500"
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

export default UnclaimedVehicle;
