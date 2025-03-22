import React, { useState, useEffect } from "react";

const MalkhanaMovement = () => {
  const [formData, setFormData] = useState({
    entryType: "",
    firNumber: "",
    mudNumber: "",
    takenOutBy: "",
    description: "",
    recievedBy: "",
    document: "",
  });

  const [movements, setMovements] = useState([]);

  useEffect(() => {
    fetchMovements();
  }, []);

  const fetchMovements = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/movements");
      const data = await response.json();
      setMovements(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/movements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        fetchMovements();
        setFormData({
          entryType: "",
          firNumber: "",
          mudNumber: "",
          takenOutBy: "",
          description: "",
          recievedBy: "",
          document: "",
        });
      }
    } catch (error) {
      console.error("Error adding entry:", error);
    }
  };

  return (
    <div className=" mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Malkhana Out Movement</h2>
      <form onSubmit={handleSubmit} className="space-y-4 flex flex-wrap gap-3">
        <select
          name="entryType"
          value={formData.entryType}
          onChange={handleChange}
          required
          className="border p-2 w-[250px] rounded"
        >
          <option value="">Select Entry Type</option>
          {["Malkhana_Entry", "FSL_Entry", "Kurki_Entry", "Other_Entry"].map(
            (type) => (
              <option key={type} value={type}>
                {type}
              </option>
            )
          )}
        </select>
        <input
          type="text"
          name="firNumber"
          placeholder="FIR Number"
          value={formData.firNumber}
          onChange={handleChange}
          required
          className="border p-2 w-[250px] rounded"
        />
        <input
          type="text"
          name="mudNumber"
          placeholder="Mud Number"
          value={formData.mudNumber}
          onChange={handleChange}
          required
          className="border p-2 w-[250px] rounded"
        />
        <input
          type="text"
          name="takenOutBy"
          placeholder="Taken Out By"
          value={formData.takenOutBy}
          onChange={handleChange}
          required
          className="border p-2 w-[250px] rounded"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="border p-2 w-[250px] rounded"
        />
        <input
          type="text"
          name="recievedBy"
          placeholder="Received By"
          value={formData.recievedBy}
          onChange={handleChange}
          required
          className="border p-2 w-[250px] rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-[200px] rounded font-bold"
        >
          Submit
        </button>
      </form>

      <h2 className="text-xl font-bold mt-6">Records</h2>
      <table className="w-full border mt-2">
        <thead>
          <tr>
            <th className="border p-2">Entry Type</th>
            <th className="border p-2">FIR No.</th>
            <th className="border p-2">Mud No.</th>
            <th className="border p-2">Taken Out By</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Received By</th>
          </tr>
        </thead>
        <tbody>
          {movements.map((movement, index) => (
            <tr key={index} className="border">
              <td className="border p-2">{movement.entryType}</td>
              <td className="border p-2">{movement.firNumber}</td>
              <td className="border p-2">{movement.mudNumber}</td>
              <td className="border p-2">{movement.takenOutBy}</td>
              <td className="border p-2">{movement.description}</td>
              <td className="border p-2">{movement.recievedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MalkhanaMovement;
