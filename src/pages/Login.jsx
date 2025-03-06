import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("LOGINDATA", formData);
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="w-[400px] bg-gray-100 shadow-lg rounded-xl p-6 mx-auto mt-10">
      <h2 className="text-center font-extrabold text-2xl text-gray-800 mb-6">
        Login
      </h2>
      <form onSubmit={handleLogin} className="flex flex-col space-y-4">
        {[
          { name: "email", label: "Email", type: "email" },
          { name: "password", label: "Password", type: "password" },
        ].map((field, index) => (
          <div key={index} className="flex flex-col">
            <label
              htmlFor={field.name}
              className="text-gray-700 font-semibold mb-1"
            >
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              placeholder={`Enter ${field.label}`}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className="outline-none border border-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-md px-3 py-2 text-gray-800"
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
        >
          Login
        </button>
      </form>
      <div className="text-center mt-4 text-gray-600">
        <p>
          Don't have an account?{" "}
          <Link to={"/"} className="text-blue-600 font-bold hover:underline">
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
