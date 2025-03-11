import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addIpc } from "../../utils/seizedSlice/ipcSlice";

const IpcVehicle = () => {
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
    vivechak: "",
    result: "",
    firNumber: "",
    vehicleOwner: "",
    document: null,
  });

  const ipcData = useSelector((store) => store.ipc);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchIpcdata();
  }, []);

  const fetchIpcdata = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/ipcVehicle");
      dispatch(addIpc(response.data));
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
    try {
      e.preventDefault();
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      await axios.post("http://localhost:8080/api/ipcVehicle", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      fetchIpcdata();
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  return (
    <div className="w-[90%] mx-auto my-10">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        IPC Vehicle Form
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-4 justify-self-auto mx-auto"
      >
        {Object.keys(formData).map((key) => (
          <div key={key} className="flex flex-col">
            <label
              htmlFor={key}
              className="block text-gray-700 font-medium mb-1 text-start"
            >
              {key.replace(/([A-Z])/g, " $1").trim()}:
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

      <div className="mt-8 overflow-x-auto">
        <table className="w-full border border-gray-300 shadow-lg rounded-lg bg-white">
          <thead className="bg-blue-500 text-white">
            <tr>
              {Object.keys(formData).map((record, index) => (
                <th key={index} className="border p-2 text-left capitalize">
                  {record.replace(/([A-Z])/g, " $1").trim()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ipcData?.ipcVehicle?.length > 0 ? (
              ipcData.ipcVehicle.map((record, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  {Object.keys(formData).map((key) => (
                    <td key={key} className="border p-2">
                      {key === "gdDate" ? (
                        new Date(record[key]).toLocaleDateString("en-GB")
                      ) : key === "document" ? (
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
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
                <td colSpan={15} className="text-center py-4 text-gray-500">
                  No record found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IpcVehicle;
