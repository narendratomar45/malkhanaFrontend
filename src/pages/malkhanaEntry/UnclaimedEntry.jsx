import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUnclaimedEntry } from "../../utils/malkhanaSlice/unclaimedEntrySlice";

const UnclaimedEntry = () => {
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
  const dispatch = useDispatch();
  const unclaimedEntryData = useSelector((store) => store.unclaimedEntry);
  console.log("i", unclaimedEntryData);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "file" ? files[0] : value, // Handling file input
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      // Debugging: Log FormData
      for (let pair of formDataToSend.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      const response = await axios.post(
        "http://localhost:8080/api/unclaimedEntry",
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("RESPONSE", response.data);
      alert("Form submitted successfully!");

      // Update Redux store
      dispatch(addUnclaimedEntry(response.data));

      // Reset form state
      setFormData({
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
        avatar: null, // Reset file input
      });
    } catch (error) {
      console.log("ERROR", error.response?.data || error.message);
    }
  };

  const fetchUnclaimedEntry = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/unclaimedEntry"
      );
      // console.log("RES", response);

      dispatch(addUnclaimedEntry(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUnclaimedEntry();
  }, []);

  return (
    <div className="w-full my-10">
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
              className="w-[200px] px-2 py-1 border border-gray-700 rounded outline-none hover:bg-gray-100"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-[#7b5926] text-white px-4 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UnclaimedEntry;
