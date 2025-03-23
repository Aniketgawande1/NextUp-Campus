import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    // Get token from localStorage
    const auth = JSON.parse(localStorage.getItem("auth")); 
    const token = auth?.token; // Extract token

    if (!token) {
      setMessage("You are not authorized. Please log in.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ Pass token for authentication
        },
        body: JSON.stringify(formData),
        credentials: "include",
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Event created successfully!");
        setTimeout(() => navigate("/events"), 1500);
      } else {
        setMessage(data.error || "Failed to create event.");
      }
    } catch (error) {
      setMessage("Error connecting to server.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Create Event</h2>
        {message && <p className="text-red-400">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded mb-2"
          />
          <textarea
            name="description"
            placeholder="Event Description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded mb-2"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded mb-2"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded mb-4"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
