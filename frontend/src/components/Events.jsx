import { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      const authData = localStorage.getItem("auth");
      if (!authData) {
        setError("Unauthorized: Please log in first.");
        return;
      }

      const { token } = JSON.parse(authData); // Extract the token

      try {
        const response = await fetch("http://localhost:5000/api/events", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h2 className="text-2xl font-bold">Upcoming Events</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event._id} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-sm text-gray-400">{event.description}</p>
              <p className="mt-2 text-gray-300">
                📍 {event.location} | 🗓 {new Date(event.date).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
  );
};

export default Events;
