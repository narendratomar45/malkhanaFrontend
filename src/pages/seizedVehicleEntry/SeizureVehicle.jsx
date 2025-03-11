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
    <div className="w-[90%] mx-auto my-10">
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 ">
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label
              htmlFor={key}
              className="block text-gray-700 font-medium mb-1 text-start"
            >
              {key}:
            </label>
            {key === "document" ? (
              <input
                type="file"
                name={key}
                onChange={handleChange}
                placeholder={key}
                className="w-[200px] px-2 py-1 border border-gray-700 rounded outline-none hover:bg-gray-100"
              />
            ) : key === "gdDate" ? (
              <input
                type="date"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                placeholder={key}
                className="w-[200px] px-2 py-1 border border-gray-700 rounded outline-none hover:bg-gray-100"
              />
            ) : (
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                placeholder={key}
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

      <div className="mt-6 overflow-x-auto">
        <table className="w-full border border-black shadow-lg rounded-lg bg-white">
          <thead className="bg-blue-500 text-white">
            <tr className=" bg-blue-600">
              {Object.keys(formData).map((record, index) => (
                <th
                  key={index}
                  className="border border-black px-4 py-2 text-left capitalize"
                >
                  {record}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {seizureData?.seizureVehicle?.length > 0 ? (
              seizureData.seizureVehicle.map((record, index) => (
                <tr key={index} className="hover:bg-gray-100 ">
                  {Object.keys(formData).map((key) => (
                    <td key={key} className="border px-4 py-2">
                      {key === "gdDate" ? (
                        new Date(record[key]).toLocaleDateString("en-GB")
                      ) : key === "document" ? (
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
