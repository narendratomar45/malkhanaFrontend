import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addImportData } from "../utils/importDataSlice";

const ImportData = () => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const fileData = useSelector((store) => store.importData);
  console.log("FD", fileData);

  const fetchImportData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/importData");
      console.log("RES", response.data);
      dispatch(addImportData(response.data));
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("document", file);

      await axios.post("http://localhost:8080/api/importData", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      fetchImportData();
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Failed to upload file.");
    }
  };

  useEffect(() => {
    fetchImportData();
  }, []);

  if (!fileData || fileData.length === 0) return <div>Loading...</div>;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Import Data
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="document" className="text-gray-700 font-medium">
            Upload File:
          </label>

          <input
            type="file"
            name="document"
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600 transition cursor-pointer"
            onChange={(e) => setFile(e.target.files[0])}
          />

          {file && (
            <p className="text-sm text-gray-500 text-center">
              Selected File: <span className="font-semibold">{file.name}</span>
            </p>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Table for displaying imported data */}
      <div className="mt-8 w-full max-w-5xl overflow-x-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Imported Data
        </h2>
        <table className="min-w-full bg-white border border-black  border-collapse shadow-md rounded-md overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr className=" border border-black">
              <th className="border  px-4 py-2">Mud No</th>
              <th className="border px-4 py-2">FIR No</th>
              <th className="border px-4 py-2">Date Seizure</th>
              <th className="border px-4 py-2">IO Name</th>
              <th className="border px-4 py-2">Case Type</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Police Station</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Case Decision</th>
            </tr>
          </thead>
          <tbody>
            {fileData.importData.map((item, index) => (
              <tr key={index} className="border-b text-center">
                <td className="border px-4 py-2">{item.Mud_no}</td>
                <td className="border px-4 py-2">{item.FIR_no}</td>
                <td className="border px-4 py-2">{item.Date_Seizure}</td>
                <td className="border px-4 py-2">{item.IO_Name}</td>
                <td className="border px-4 py-2">{item.Case_Type1}</td>
                <td className="border px-4 py-2">{item.Mud_Desc}</td>
                <td className="border px-4 py-2">{item.PS}</td>
                <td className="border px-4 py-2">{item.Location}</td>
                <td className="border px-4 py-2">{item.CaseDecideYesNo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportData;
