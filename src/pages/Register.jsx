import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    policeStation: "",
    mobile: "",
    email: "",
    designation: "",
    role: "",
    password: "",
    confirmPassword: "",
    district: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const newData = new FormData();
      Object.keys(formData).forEach((key) =>
        newData.append(key, formData[key])
      );
      const response = await axios.post(
        "http://localhost:8080/auth/register",
        newData,
        { withCredentials: true }
      );
      console.log("RES", response);

      setFormData((prevData) => {
        return Object.keys(prevData).reduce((acc, key) => {
          acc[key] = "";
          return acc;
        }, {});
      });
    } catch (error) {
      console.error("Signup Error:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-center font-bold text-2xl mb-5 text-blue-700">
        Register
      </h2>
      <form onSubmit={handleSignup}>
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(formData).map((key) => (
            <div key={key} className="flex flex-col">
              <label htmlFor={key} className="font-semibold capitalize">
                {key}:
              </label>
              <input
                type={key.includes("password") ? "password" : "text"}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                placeholder={key}
                className="p-1 border rounded-md"
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 mt-5 rounded-md hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
      <div className="text-center mt-3">
        <p className="text-gray-600">
          Already have an account?{" "}
          <Link to={"/login"}>
            <button className="text-blue-600 font-semibold">Login</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
