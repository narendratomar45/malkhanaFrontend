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
      const response = await axios.post(
        "http://localhost:8080/auth/register",
        formData,
        { withCredentials: true }
      );
      const data = response.data;
      console.log("SIGNUPDATA", data.user);

      setFormData({
        username: "",
        policeStation: "",
        mobile: "",
        email: "",
        designation: "",
        role: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Signup Error:", error);
    }
  };

  return (
    <div className="w-full flex justify-center  items-center bg-white">
      <div className=" w-[550px] text-center bg-gray-100 shadow-lg rounded-xl p-6  ">
        <h2 className="text-center font-bold text-2xl mb-5 text-blue-700">
          Signup
        </h2>
        <form onSubmit={handleSignup} className=" flex flex-col">
          {[
            { label: "Username", name: "username", type: "text" },
            { label: "Police Station", name: "policeStation", type: "text" },
            { label: "Mobile", name: "mobile", type: "text" },
            { label: "Email", name: "email", type: "email" },
            { label: "Designation", name: "designation", type: "text" },
            { label: "Role", name: "role", type: "text" },
            { label: "Password", name: "password", type: "password" },
            {
              label: "Confirm Password",
              name: "confirmPassword",
              type: "password",
            },
          ].map((field, index) => (
            <div key={index} className="mb-2 flex gap-2">
              <label
                htmlFor={field.name}
                className="block w-40 text-gray-700 font-medium mb-1 text-start"
              >
                {field.label}:
              </label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.label}
                value={formData[field.name]}
                onChange={handleChange}
                required
                className="w-[300px] px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-bold py-2 rounded-lg hover:bg-blue-600 transition-all"
          >
            Signup
          </button>
        </form>
        <div className="text-center mt-2">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to={"/login"}>
              <button className="text-blue-700 font-semibold hover:underline">
                Login
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
