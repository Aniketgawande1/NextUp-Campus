import React, { useState } from 'react';
import { Calendar, Clock, Users, Map, Bell, Star, TrendingUp, Filter } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    { id: 1, title: 'Tech Hackathon', date: 'Mar 20', time: '10:00 AM', location: 'Innovation Hall', attendees: 128 },
    { id: 2, title: 'Cultural Festival', date: 'Mar 25', time: '4:00 PM', location: 'Main Quad', attendees: 456 },
    { id: 3, title: 'Career Fair', date: 'Mar 30', time: '1:00 PM', location: 'Student Center', attendees: 312 }
  ];

  const trendingEvents = [
    { id: 1, title: 'Music Concert', date: 'Apr 5', time: '8:00 PM', location: 'Auditorium', attendees: 652, growth: 45 },
    { id: 2, title: 'Science Exhibition', date: 'Apr 10', time: '11:00 AM', location: 'Science Block', attendees: 289, growth: 32 },
    { id: 3, title: 'Sports Tournament', date: 'Apr 15', time: '3:00 PM', location: 'Sports Complex', attendees: 524, growth: 28 }
  ];

  return (
    <div id="dashboard" className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Campus Events Dashboard</h1>
          <p className="text-gray-400">Welcome back, Admin</p>
        </div>
        <div className="flex space-x-4">
          <button className="bg-gray-800 p-2 rounded-full">
            <Bell size={20} />
          </button>
          <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
            <span className="font-bold">JD</span>
          </div>
        </div>
      </header>
      
      <div className="flex space-x-2 mb-4">
        <button 
          className={`px-4 py-2 rounded-lg ${activeTab === 'upcoming' ? 'bg-blue-600' : 'bg-gray-700'}`}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming
        </button>
        <button 
          className={`px-4 py-2 rounded-lg ${activeTab === 'trending' ? 'bg-blue-600' : 'bg-gray-700'}`}
          onClick={() => setActiveTab('trending')}
        >
          Trending
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400 border-b border-gray-700">
              <th className="pb-4">Event</th>
              <th className="pb-4">Date</th>
              <th className="pb-4">Time</th>
              <th className="pb-4">Location</th>
              <th className="pb-4">Attendees</th>
              {activeTab === 'trending' && <th className="pb-4">Growth</th>}
            </tr>
          </thead>
          <tbody>
            {(activeTab === 'upcoming' ? upcomingEvents : trendingEvents).map((event) => (
              <tr key={event.id} className="border-b border-gray-700">
                <td className="py-4">{event.title}</td>
                <td className="py-4">{event.date}</td>
                <td className="py-4">{event.time}</td>
                <td className="py-4">{event.location}</td>
                <td className="py-4">{event.attendees}</td>
                {activeTab === 'trending' && <td className="py-4 text-green-400">+{event.growth}%</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
