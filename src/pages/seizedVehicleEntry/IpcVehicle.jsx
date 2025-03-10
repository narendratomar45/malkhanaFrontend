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
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className=" mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          IPC Vehicle Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {Object.keys(formData).map((key) => (
            <div key={key} className="flex flex-col">
              <label
                htmlFor={key}
                className="text-sm font-medium text-gray-600 mb-1"
              >
                {key.replace(/([A-Z])/g, " $1").trim()}:
              </label>
              {key === "document" ? (
                <input
                  type="file"
                  name={key}
                  onChange={handleChange}
                  className=" border p-2 w-full"
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full border border-gray-300 shadow-lg rounded-lg bg-white">
          <thead className="bg-blue-500 text-white">
            <tr>
              {Object.keys(formData).map((record, index) => (
                <th key={index} className="border p-2 text-left">
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
                      {key === "document" ? (
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
