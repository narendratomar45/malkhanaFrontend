import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMalkhanaEntry } from "../../utils/malkhanaSlice/malkhanaEntrySlice";

const MalkhanaEntry = () => {
  const [formData, setFormData] = useState({
    firNumber: "",
    firYear: "",
    mudNumber: "",
    gdNumber: "",
    gdDate: "",
    ioName: "",
    dakhilKarneWala: "",
    banam: "",
    caseProperty: "",
    underSection: "",
    actType: "",
    description: "",
    place: "",
    court: "",
    status: "",
    avatar: null, // Changed from "" to null for file input
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const dispatch = useDispatch();
  const malkhanaData = useSelector((store) => store.malkhanaEntry);

  const fetchMalkhanaData = async () => {
    try {
      const token = localStorage.getItem("malkhanaToken");
      const response = await axios.get(
        "http://localhost:8080/api/malkhanaEntry",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("RESPONSE", response);
      dispatch(addMalkhanaEntry(response.data));
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
      // Creating a FormData object for file upload
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      await axios.post(
        "http://localhost:8080/api/malkhanaEntry",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      fetchMalkhanaData();
    } catch (error) {
      console.log("ERROR", error.response?.data || error.message);
    }
  };

  const totalItems = malkhanaData?.malkhana?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedData = malkhanaData?.malkhana?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => {
      if (direction === "next" && prevPage < totalPages) return prevPage + 1;
      if (direction === "prev" && prevPage > 1) return prevPage - 1;
      return prevPage;
    });
  };

  useEffect(() => {
    fetchMalkhanaData();
  }, []);
  if (!malkhanaData?.malkhana) {
    return <p>Loading...</p>;
  }
  return (
    <div className="w-full mx-auto my-10">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-4 justify-self-auto mx-auto"
      >
        {[
          { name: "firNumber", label: "Fir Number", type: "text" },
          { name: "firYear", label: "Fir Year", type: "text" },
          { name: "mudNumber", label: "Mud Number", type: "text" },
          { name: "gdNumber", label: "Gd Number", type: "text" },
          { name: "gdDate", label: "Gd Date", type: "date" },
          { name: "ioName", label: "Io Name", type: "text" },
          { name: "dakhilKarneWala", label: "Dakhil KarneWala", type: "text" },
          { name: "banam", label: "Banam", type: "text" },
          { name: "caseProperty", label: "Case Property", type: "text" },
          { name: "underSection", label: "Under Section", type: "text" },
          { name: "actType", label: "Act Type", type: "text" },
          { name: "description", label: "Description", type: "text" },
          { name: "place", label: "Place", type: "text" },
          { name: "court", label: "Court", type: "text" },
          { name: "status", label: "Status", type: "text" },
          { name: "avatar", label: "Avatar", type: "file" }, // Fixed file input
        ].map((field, index) => (
          <div key={index} className="">
            <label
              htmlFor={field.name}
              className="block text-gray-700 font-medium mb-1 text-start"
            >
              {field.label}:
            </label>
            <input
              type={field.type}
              name={field.name}
              onChange={handleChange}
              placeholder={field.label}
              className="w-[200px] px-2 py-1 border border-gray-700 rounded outline-none hover:bg-gray-100"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-400 text-white px-4 py-2 rounded-md w-48"
        >
          Submit
        </button>
      </form>
      <div className="mt-8 overflow-x-auto">
        <table className=" w-full border-2 border-collapse border-black ">
          <thead>
            <tr className="bg-blue-400 text-white border-2 border-black">
              <th className="border border-black p-2">Fir Number</th>
              <th className="border border-black p-2">Fir Year</th>
              <th className="border border-black p-2">Mud Number</th>
              <th className="border border-black p-2">Gd Number</th>
              <th className="border border-black p-2">Gd Date</th>
              <th className="border border-black p-2">Io Name</th>
              <th className="border border-black p-2">Dakhil KarneWala</th>
              <th className="border border-black p-2">Banam</th>
              <th className="border border-black p-2">Case Property</th>
              <th className="border border-black p-2">Under Section</th>
              <th className="border border-black p-2">Act Type</th>
              <th className="border border-black p-2">Description</th>
              <th className="border border-black p-2">Place</th>
              <th className="border border-black p-2">Court</th>
              <th className="border border-black p-2">Status</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData?.length > 0 ? (
              paginatedData.map((entry, index) => (
                <tr key={index} className="border">
                  <td className="border p-2">{entry.firNumber}</td>
                  <td className="border p-2">{entry.firYear}</td>
                  <td className="border p-2">{entry.mudNumber}</td>
                  <td className="border p-2">{entry.gdNumber}</td>
                  <td className="border p-2">{entry.gdDate}</td>
                  <td className="border p-2">{entry.ioName}</td>
                  <td className="border p-2">{entry.dakhilKarneWala}</td>
                  <td className="border p-2">{entry.banam}</td>
                  <td className="border p-2">{entry.caseProperty}</td>
                  <td className="border p-2">{entry.underSection}</td>
                  <td className="border p-2">{entry.actType}</td>
                  <td className="border p-2">{entry.description}</td>
                  <td className="border p-2">{entry.place}</td>
                  <td className="border p-2">{entry.court}</td>
                  <td className="border p-2">{entry.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="15" className="text-center p-4">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className=" flex justify-center items-center gap-5">
        <button
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange("next")}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MalkhanaEntry;
