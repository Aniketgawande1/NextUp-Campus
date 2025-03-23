import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Registration successful! You can now log in.");
        setFormData({ username: "", email: "", password: "" });
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setMessage(data.error || "Registration failed. Try again.");
      }
    } catch (error) {
      setMessage("Error connecting to server.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        {message && <p className="text-red-400">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded mb-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded mb-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded mb-4"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
