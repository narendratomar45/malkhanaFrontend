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
    <div className="w-[90%] mx-auto my-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-4 justify-self-auto mx-auto"
      >
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label
              className="block text-gray-700 font-medium mb-1 text-start"
              htmlFor={key}
            >
              {key.replace(/([A-Z])/g, " $1")}
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

      {/* Table Section */}
      <div className="mt-8 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 shadow-md bg-white">
          <thead>
            <tr className="bg-blue-600 text-white">
              {Object.keys(formData).map((key) => (
                <th key={key} className="p-3 border border-black capitalize border-black">
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
