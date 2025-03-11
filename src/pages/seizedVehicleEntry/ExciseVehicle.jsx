import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExcise } from "../../utils/seizedSlice/exciseSlice";

const ExciseVehicle = () => {
  const [formData, setFormData] = useState({
    mudNumber: "",
    gdNumber: "",
    gdDate: "",
    underSection: "",
    vehicleType: "",
    regNo: "",
    chasisNumber: "",
    engineNumber: "",
    actType: "",
    vivechak: "",
    colour: "",
    result: "",
    firNumber: "",
    banam: "",
    vehicleOwner: "",
    document: null,
  });

  const dispatch = useDispatch();
  const exciseData = useSelector((store) => store.excise);

  useEffect(() => {
    fetchExciseVehicle();
  }, []);

  const fetchExciseVehicle = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/exciseVehicle"
      );
      dispatch(addExcise(response.data));
      console.log("RES", response);
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

      const response = await axios.post(
        "http://localhost:8080/api/exciseVehicle",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("ResS", response);

      fetchExciseVehicle();
    } catch (error) {
      console.error("Error adding record", error);
    }
  };

  if (!exciseData) return <div className="text-center text-lg">Loading...</div>;

  return (
    <div className="w-[90%] mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">
        Excise Vehicle Form
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-wrap   gap-4 ">
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

      <div className="mt-8">
        <h2 className="text-2xl font-bold text-center text-blue-700">
          Records
        </h2>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full border border-black shadow-lg rounded-lg bg-white">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                {Object.keys(formData).map((key) => (
                  <th key={key} className="border border-black p-2 text-left capitalize">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {exciseData?.exciseVehicle?.length > 0 ? (
                exciseData.exciseVehicle.map((record, index) => (
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
                            className="text-blue-600 underline"
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
                    className="text-center p-4"
                  >
                    No Record Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExciseVehicle;
